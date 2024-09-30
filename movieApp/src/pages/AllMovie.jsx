import { Box, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { MovieGrid } from "../components/MovieGrid";
import { getAllMovies } from "../actions/appAction";
import { movieContext } from "../context/MovieContext";
import { useLocation } from "react-router-dom";
import { FilterOptions } from "../components/FilterOptions";

export const AllMovie = () => {
  const { state, dispatch } = useContext(movieContext);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [isInfinity, setIsInfinity] = useState(false);
  const [pathName, setPathName] = useState("");
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!loading) {
        setIsInfinity(true);
        setPage((prev) => prev + 1);
      }
    }
  };

  function handleSort(e) {
    setIsInfinity(false);
    setSort(e.target.value);
  }

  useEffect(() => {
    setPathName(pathname);
    setIsInfinity(false);
  }, [pathname]);

  useEffect(() => {
    
      setLoading(true);
      getAllMovies(
        dispatch,
        pathname === "/movie" ? "movie" : "tv",
        page,
        sort,
        isInfinity
      ).finally(() => setLoading(false));
    
  }, [dispatch, page, sort, pathName, isInfinity]);
  console.log("i am here")

  return (
    <Box>
      <Flex justifyContent={"flex-end"} pr="20" m="2">
        <FilterOptions handleSort={handleSort} />
      </Flex>
      <MovieGrid data={state.allMovie.data} isLoading={loading} />
    </Box>
  );
};

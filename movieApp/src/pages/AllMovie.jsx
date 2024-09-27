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
  const [pathName, SetPathName] = useState("");
  const { pathname } = useLocation();
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsInfinity(true);
      setPage((pre) => pre + 1);
    }
  };

  function handleSort(e) {
    setIsInfinity(false);
    setSort(e.target.value);
  }

  useEffect(() => {
    SetPathName(pathname);
    setIsInfinity(false);
  }, [pathname]);

  useEffect(() => {
    if (isInfinity) {
      setIsInfinity(false);
    }
  }, [pathName]);

  useEffect(() => {
    getAllMovies(
      dispatch,
      pathname == "/movie" ? "movie" : "tv",
      page,
      sort,
      isInfinity
    );
  }, [dispatch, page, sort, pathName]);

  return (
    <Box>
      <Flex justifyContent={"flex-end"} pr="20" m="2">
        <FilterOptions handleSort={handleSort} />
      </Flex>
      <MovieGrid {...state.allMovie} />
    </Box>
  );
};

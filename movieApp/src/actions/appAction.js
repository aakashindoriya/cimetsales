import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;
let imageUrl = "https://image.tmdb.org/t/p/original";

export const getAllMovies = async (
  dispatch,
  type = "movie",
  page = 1,
  sort = "",
  isInfinity
) => {
  try {
    
    dispatch({ type: "ALLMOVIE_LOADING" });
    console.log("triggerd")
    let url = `${baseUrl}/discover/${type}?language=en-US&page=${page}&sort_by=${sort}&api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = data.results.map(
      (el) =>
        (el = {
          ...el,
          backdrop_path: imageUrl + el.backdrop_path,
          poster_path: imageUrl + el.poster_path,
        })
    );
    return dispatch({ type: "ALLMOVIE", payload: { data, isInfinity } });
  } catch (error) {
    console.log(error, "err");
  }
};

export const getSingleMovie = async (dispatch, type = "tv", id = "136166") => {
  try {
    // Dispatch loading action
    dispatch({ type: "SINGLE_MOVIE_LOADING" });

    let url = `${baseUrl}/${type}/${id}?api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = { ...data, poster_path: imageUrl + data.poster_path };
    let results = await axios.get(
      `${baseUrl}/movie/${data.id}/videos?api_key=${apiKey}`
    );
    data.videoKey = results.data.results[0]?.key;
    return dispatch({ type: "SINGLE_MOVIE", payload: data });
  } catch (error) {
    console.log(error, "err");
  }
};

export const getSearchedMovies = async (dispatch, term = "john") => {
  try {
    // Dispatch loading action
    dispatch({ type: "SEARCHED_MOVIE_LOADING" });

    let url = `${baseUrl}/search/movie?query=${term}&page=1&api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = data.results.map(
      (el) =>
        (el = {
          ...el,
          backdrop_path: imageUrl + el.backdrop_path,
          poster_path: imageUrl + el.poster_path,
        })
    );
    return dispatch({ type: "SEARCHED_MOVIE", payload: data });
  } catch (error) {
    console.log(error, "err");
  }
};

export const GetAllHomePageMovies = async (dispatch) => {
  try {
    // Dispatch loading action
    dispatch({ type: "HOME_PAGE_MOVIES_LOADING" });

    let urls = [
      `${baseUrl}/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/tv/popular?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/trending/all/day?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/trending/all/week?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=${apiKey}`,
    ];
    let res = urls.map(async (el) => await axios.get(el));
    let apicall = await Promise.all(res);

    apicall = apicall.map((data) =>
      data.data.results.map(
        (el) =>
          (el = {
            ...el,
            backdrop_path: imageUrl + el.backdrop_path,
            poster_path: imageUrl + el.poster_path,
          })
      )
    );
    dispatch({ type: "HOME_PAGE_MOVIES", payload: apicall });
  } catch (error) {
    console.log(error);
  }
};

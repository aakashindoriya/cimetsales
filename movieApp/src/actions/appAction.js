import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;
let imageUrl = "https://image.tmdb.org/t/p/original";
export const GetPopularMovies = async (dispatch, type = "movie") => {
  try {
    dispatch({ type: "POPULAR_LOADING" });
    let url = `${baseUrl}/${type}/popular?language=en-US&page=1&api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = data.results.map(
      (el) =>
        (el = {
          ...el,
          backdrop_path: imageUrl + el.backdrop_path,
          poster_path: imageUrl + el.poster_path,
        })
    );
    return dispatch({ type: "POPULAR", payload: data });
  } catch (error) {
    console.log(error, "err");
  }
};
export const getTrandingMovies = async (dispatch, span = "day") => {
  try {
    dispatch({ type: "TRANDING_LOADING" });
    let url = `${baseUrl}/trending/all/${span}?language=en-US&page=1&api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = data.results.map(
      (el) =>
        (el = {
          ...el,
          backdrop_path: imageUrl + el.backdrop_path,
          poster_path: imageUrl + el.poster_path,
        })
    );
    return dispatch({ type: "TRENDING", payload: data });
  } catch (error) {
    console.log(error, "err");
  }
};
export const getTopRatedMovies = async (dispatch, type = "movie") => {
  try {
    dispatch({ type: "TOPRATED_LOADING" });
    let url = `${baseUrl}/${type}/top_rated?language=en-US&page=1&api_key=${apiKey}`;
    let { data } = await axios.get(url);
    data = data.results.map(
      (el) =>
        (el = {
          ...el,
          backdrop_path: imageUrl + el.backdrop_path,
          poster_path: imageUrl + el.poster_path,
        })
    );
    return dispatch({ type: "TOPRATED", payload: data });
  } catch (error) {
    console.log(error, "err");
  }
};
export const getAllMovies = async (
  dispatch,
  type = "movie",
  page = 1,
  sort = "",
  isInfinity
) => {
  console.log(sort, "infunc");
  try {
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
    // https://api.themoviedb.org/3/movie/957452/videos?language=en-US&page=1&api_key=fa89a24b6ec93d795380bdb4810bb735
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
    console.log("function call");
    let urls = [
      `${baseUrl}/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/tv/popular?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/trending/all/day?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/trending/all/week?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`,
      `${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=${apiKey}`
    ];
    let res = urls.map(async (el) => await axios.get(el));
    let apicall = await Promise.all(res);
    
    apicall=apicall.map((data)=>data.data.results.map((el)=>(el = {
      ...el,
      backdrop_path: imageUrl + el.backdrop_path,
      poster_path: imageUrl + el.poster_path,
    })))
    dispatch({type:"HOME_PAGE_MOVIES",payload:apicall})
   
  } catch (error) {
    console.log(error)
  }
};

import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_API_KEY;
let imageUrl = "https://image.tmdb.org/t/p/original";
export const GetPopularMovies = async (dispatch,type="movie") => {
  try {
    dispatch({type:"POPULAR_LOADING"})
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
export const getTrandingMovies = async (dispatch,span="day") => {
   try {
      dispatch({ type:"TRANDING_LOADING"})
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
 export const getTopRatedMovies = async (dispatch,type="movie") => {
   try {
      dispatch({ type:"TOPRATED_LOADING"})
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
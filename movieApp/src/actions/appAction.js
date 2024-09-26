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
 export const getAllMovies = async (dispatch,type="movie",page=1,sort="",isInfinity) => {
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
    return dispatch({ type: "ALLMOVIE", payload: {data,isInfinity} });
  } catch (error) {
    console.log(error, "err");
  }
};

export const getSingleMovie=async(dispatch,type="tv",id="136166")=>{
try {
  let url=`${baseUrl}/${type}/${id}?api_key=${apiKey}`
  let {data}=await axios.get(url)
  data={...data,poster_path: imageUrl + data.poster_path}
  return dispatch({type:"SINGLE_MOVIE",payload:data})
} catch (error) {
  console.log(error, "err");
}
}
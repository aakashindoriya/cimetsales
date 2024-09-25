import axios from "axios"

const baseUrl=import.meta.VITE_BASEURL
const ApiKey=import.meta.env.VITE_API_KEY
export const GetPopularMovies=async(dispatch)=>{
   
 try {
    let {data}=await axios.get(`${baseUrl}/movie/popular?language=en-US&page=1&api_key=${ApiKey}`)
    console.log(data,"from")
 } catch (error) {
    console.log(error,"err")
 }
}
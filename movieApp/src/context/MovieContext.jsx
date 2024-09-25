import { createContext, useReducer } from "react"

export const movieContext=createContext()

const initalState={
    trending:{data:[],isLoading:false},
    popular:{data:[],isLoading:false},
    topRated:{data:[],isLoading:false},
}

const movieReducer=(state,{type,payload})=>{
    switch(type){
        case "TRENDDING_LOADING":return{
            ...state,
            trending:{...state.trending,isLoading:true}
        }
        case "POPULAR_LOADING":return{
            ...state,
            popular:{...state.popular,isLoading:true}
        }
        case "TOPRATED_LOADING":return{
            ...state,
            topRated:{...state.topRated,isLoading:true}
        }
        case "TRENDING":return {
            ...state,
           trending:{...state.trending,data:payload,isLoading:false}
        }
        case "POPULAR":return {
            ...state,
            popular:{...state.popular,data:payload,isLoading:false}
        }
        case "TOPRATED":return {
            ...state,
            topRated:{...state.topRated,data:payload,isLoading:false}
        }

        default:return state
    }

}

export const MovieContext = ({children}) => {
const [state,dispatch]=useReducer(movieReducer,initalState)
  return (
    <movieContext.Provider value={{state,dispatch}}>{children}</movieContext.Provider>
  )
}

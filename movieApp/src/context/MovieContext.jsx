import { createContext, useReducer } from "react"

export const movieContext=createContext()

const initalState={
    tranding:[],
    popular:[],
    topRated:[],
    isLoading:false
}

const movieReducer=(state,{type,payload})=>{
    switch(type){
        case "TRANDING":return {
            ...state,
            tranding:payload,
            isLoading:false
        }
        case "POPULAR":return {
            ...state,
            popular:payload,
            isLoading:false
        }
        case "TOPRATED":return {
            ...state,
            topRated:payload,
            isLoading:false
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

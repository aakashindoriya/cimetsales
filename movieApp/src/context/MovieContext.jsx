import { createContext, useReducer } from "react";

export const movieContext = createContext();

const initalState = {
  allMovie: { data: [], isLoading: false },
  singleMovie: { data: {}, isLoading: false },
  searchedMovie: { data: [], isLoading: false },
  homePageMovies: {
    trendingDay: [],
    trendingWeek: [],
    topRatedMovie: [],
    topRatedTv: [],
    popularTv: [],
    popularMovie: [],
    isLoading: false,
  },
};

const movieReducer = (state, { type, payload }) => {
  switch (type) {
    case "HOME_PAGE_MOVIES_LOADING":
      return {
        ...state,
        homePageMovies: { ...state.homePageMovies, isLoading: true },
      };
    case "HOME_PAGE_MOVIES":
      return {
        ...state,
        homePageMovies: {
          trendingDay: [...payload[2]],
          trendingWeek: [...payload[3]],
          topRatedMovie: [...payload[4]],
          topRatedTv: [...payload[5]],
          popularTv: [...payload[1]],
          popularMovie: [...payload[0]],
          isLoading: false,
        },
      };
    case "ALLMOVIE_LOADING":
      return {
        ...state,
        allMovie: { ...state.allMovie, isLoading: true },
      };
    case "ALLMOVIE":
      if (payload.isInfinity) {
        return {
          ...state,
          allMovie: {
            ...state.topRated,
            data: [...state.allMovie.data, ...payload.data],
            isLoading: false,
          },
        };
      } else {
        return {
          ...state,
          allMovie: { ...state.allMovie, data: payload.data, isLoading: false },
        };
      }
    case "SINGLE_MOVIE_LOADING":
      return {
        ...state,
        singleMovie: { ...state.singleMovie, isLoading: true },
      };
    case "SINGLE_MOVIE":
      return {
        ...state,
        singleMovie: { data: payload, isLoading: false },
      };
    case "SEARCHED_MOVIE_LOADING":
      return {
        ...state,
        searchedMovie: { ...state.searchedMovie, isLoading: true },
      };
    case "SEARCHED_MOVIE":
      return {
        ...state,
        searchedMovie: {
          ...state.searchedMovie,
          data: payload,
          isLoading: false,
        },
      };
    
    default:
      return state;
  }
};

export const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initalState);
  return (
    <movieContext.Provider value={{ state, dispatch }}>
      {children}
    </movieContext.Provider>
  );
};

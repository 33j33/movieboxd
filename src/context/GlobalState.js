import React, { createContext, useReducer, useEffect } from "react";
import ReducerFunction from "./ReducerFunction";

// Initial State
const initialState = {
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
};
// Create GlobalContext which will save and manage GlobalState
export const GlobalContext = createContext(initialState);

// GlobalProvider Component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);
  // Actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
  const addMovieToFavourites = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie });
  };
  const removeMovieFromFavourites = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITES", payload: id });
  };
  return (
    // All the following Arrays and Functions will be available in the entire App using context
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        favourites: state.favourites,
        addMovieToFavourites,
        addMovieToWatched,
        addMovieToWatchlist,
        removeMovieFromFavourites,
        removeMovieFromWatched,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

import React, { useState, useContext } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalState";

const MovieCard = ({ movie }) => {
  const {
    watchlist,
    watched,
    favourites,
    addMovieToFavourites,
    addMovieToWatched,
    addMovieToWatchlist,
    removeMovieFromFavourites,
    removeMovieFromWatched,
    removeMovieFromWatchlist,
  } = useContext(GlobalContext);

  // States to toggle Buttons
  const [inWatched, setInWatched] = useState(
    watched.some((elem) => elem.id === movie.id)
  );
  const [inWatchlist, setInWatchlist] = useState(
    watchlist.some((elem) => elem.id === movie.id)
  );
  const [inFavourites, setInFavourites] = useState(
    favourites.some((elem) => elem.id === movie.id)
  );

  // Function to Handle Buttons
  const handleClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === "favourite-btn") {
      if (inFavourites === false) {
        addMovieToFavourites(movie);
        setInFavourites(true);
      } else {
        removeMovieFromFavourites(movie.id);
        setInFavourites(false);
      }
    } else if (e.currentTarget.id === "watchlist-btn") {
      if (inWatchlist === false) {
        addMovieToWatchlist(movie);
        setInWatchlist(true);
        setInWatched(false);
        // When movie is added to watchlist, it is removed from watched
      } else {
        removeMovieFromWatchlist(movie.id);
        setInWatchlist(false);
      }
    } else if (e.currentTarget.id === "watched-btn") {
      if (inWatched === false) {
        addMovieToWatched(movie);
        setInWatched(true);
        setInWatchlist(false);
        // When movie is added to watched, it is removed from watchlist
      } else {
        removeMovieFromWatched(movie.id);
        setInWatched(false);
      }
    }
  };

  const findRatingClass = (rating) => {
    if (rating >= 8) {
      return "great";
    } else if (rating >= 6.5) {
      return "good";
    } else if (rating >= 4.5) {
      return "average";
    } else {
      return "bad";
    }
  };
  return (
    <div className="card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="poster"
          />
        ) : (
          <div className="filler-img"></div>
        )}
        <div className="poster-overlay">
          <div className="icons">
            <div
              id="favourite-btn"
              className={inFavourites ? "red" : null}
              onClick={handleClick}
            >
              <AiFillHeart />
            </div>
            <div
              id="watchlist-btn"
              className={inWatchlist ? "active" : null}
              onClick={handleClick}
            >
              <FaPlus />
            </div>
            <div
              id="watched-btn"
              className={inWatched ? "active" : null}
              onClick={handleClick}
            >
              <BiCameraMovie />
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="title">{movie.title}</div>
        <div className={"rating " + findRatingClass(movie.vote_average)}>
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;

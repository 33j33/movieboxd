import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const KEY = process.env.REACT_APP_TMDB_API_KEY;
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${e.target.value}&language=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      });
  };
  return (
    <div className="homepage">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={onChange}
        />
      </div>
      <div className="movie-grid">
        {searchResults &&
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};
export default HomePage;

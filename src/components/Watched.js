import React, { useContext } from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";

const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="watched">
            <h1>Watched</h1>
            <p>You have watched {watched.length ? watched.length : 0} films</p>
            <div className="movie-grid">
                {watched && watched.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
export default Watched;
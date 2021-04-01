import React, { useContext } from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <div className="watchlist">
            <h1>Watchlist</h1>
            <p>You have added {watchlist.length ? watchlist.length : 0} films in your watchlist</p>
            <div className="movie-grid">
                {watchlist && watchlist.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
export default Watchlist;
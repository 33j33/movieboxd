import React, { useContext } from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";

const Favourites = () => {
    const { favourites } = useContext(GlobalContext);

    return (
        <div className="favourites">
            <h1>Favourites</h1>
            <p>You have added {favourites.length ? favourites.length : 0} favourite films</p>
            <div className="movie-grid">
                {favourites && favourites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
export default Favourites;
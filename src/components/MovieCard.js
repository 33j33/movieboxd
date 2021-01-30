import React from 'react';

const MovieCard = ({ movie }) => {

    return (
        <div className="card">
            <div className="poster-wrapper">
                {movie.poster_path ?
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                        className="poster"
                    />
                    :
                    <div className="filler-img"></div>
                }
                <div className="poster-overlay">

                </div>
            </div>
            <div className="info">
                <div className="title">{movie.title}</div>
                <div className="rating">{movie.vote_average}</div>
            </div>
        </div>
    )
}
export default MovieCard;
import React from 'react';
import { BiCameraMovie } from "react-icons/bi";
import { FaPlus } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"

const MovieCard = ({ movie }) => {

    const findRatingClass = (rating) => {
        if (rating >= 8) {
            return "great"
        }
        else if (rating >= 6.5) {
            return "good"
        }
        else if (rating >= 4.5) {
            return "average"
        }
        else {
            return "bad"
        }
    }
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
                    <div className="icons">
                        <span><AiFillHeart /></span>
                        <span><FaPlus /></span>
                        <span><BiCameraMovie /></span>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="title">{movie.title}</div>
                <div className={"rating " + findRatingClass(movie.vote_average)}>{movie.vote_average}</div>
            </div>
        </div>
    )
}
export default MovieCard;
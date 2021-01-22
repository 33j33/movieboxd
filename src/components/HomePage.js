import React, { useState } from "react";
import "../App.css";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log(process.env.REACT_APP_TMDB_API, query);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${e.target.value}&language=en-US&page=1&include_adult=false`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (!data.errors) {
                    setSearchResults(data.results);
                } else {
                    setSearchResults([]);
                }
            });

    }
    return (
        <div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={onChange}
                />
            </div>
            {searchResults && searchResults.map((movie) => (
                <p key={movie.id}>{movie.title}</p>
            ))
            }
        </div>
    )
}
export default HomePage;
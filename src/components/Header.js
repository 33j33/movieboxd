import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Header = () => {

    return (
        <header className="nav">
            <Link to="/" className="brand link">
                <div>Movieboxd</div>
            </Link>
            <div className="links">
                <Link to="/watched" className="link">Watched</Link>
                <Link to="/watchlist" className="link">Watchlist</Link>
                <Link to="/favourites" className="link">Favourites</Link>
            </div>
        </header>
    )
}
export default Header
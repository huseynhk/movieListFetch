import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><span>Home</span></Link>
                <Link to="/moviess/popular" ><span>Popular</span></Link>
                <Link to="/moviess/upcoming"><span>Upcoming</span></Link>
                <Link to="/moviess/top_rated"><span>Top Rated</span></Link>
            </div>
        </div>
    )
}

export default Header
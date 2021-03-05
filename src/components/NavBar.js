import React from "react"
import { Link } from "react-router-dom"


function NavBar({ toggleDark }){

    return (
        <div className="nav">
            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>

            <Link to="/" className="home-button">
                Home
            </Link>

            <Link to="/collection" className="project-collection">
                Collections
            </Link>

        </div>
    )
}

export default NavBar
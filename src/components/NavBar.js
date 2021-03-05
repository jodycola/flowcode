import React from "react"
import { Link } from "react-router-dom"


function NavBar({ toggleDark, handleSave }){

    return (
        <div className="nav">
            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>

            <button className="save-button" onClick={handleSave}>
            Save
            </button>

            <Link to="/" className="home-button">
                Home
            </Link>

            <Link to="/collections" className="project-collection">
                Collections
            </Link>

        </div>
    )
}

export default NavBar
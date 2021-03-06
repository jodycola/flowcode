import React from "react"
import { NavLink } from "react-router-dom"


function NavBar({ toggleDark }){

    return (
        <div className="nav">
            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>

            <NavLink exact to="/" className="home-button">
                Home
            </NavLink>

            <NavLink exact to="/collection" className="project-collection">
                Collections
            </NavLink>

        </div>
    )
}

export default NavBar
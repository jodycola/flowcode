function NavBar({ toggleDark }){

    return (
        <div className="nav">
            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>
            <button className="project-collection">
            Collections
            </button> 
        </div>
    )
}

export default NavBar
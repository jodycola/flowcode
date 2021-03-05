function NavBar({ toggleDark, handleSave }){

    return (
        <div className="nav">
            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>
            <button className="project-collection">
            Collections
            </button> 
            <button className="save-button" onClick={handleSave}>
            Save
            </button>
        </div>
    )
}

export default NavBar
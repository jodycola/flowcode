import React, { useState, useEffect } from "react"
import Project from "./Project"

const project_url = "http://localhost:3000/projects"

function Collection({ selectProject }){
    const [projects, setProjects] = useState([])

    // FETCH PROJECT DATA AND SET STATE
    useEffect(() => {
        fetch(project_url)
        .then(r => r.json())
        .then(setProjects)
    }, [])

    const displayProject = projects.map((project) => {
        return <Project 
            key={project.id}
            project={project}
            selectProject={selectProject}
        />
    })

    return (
        <div>
            <h1>Project Collection</h1>
            {displayProject}
        </div>
    )
}

export default Collection
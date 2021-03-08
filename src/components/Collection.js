import React, { useState, useEffect } from "react"
import Project from "./Project"

const url = "http://localhost:3000/projects"

function Collection({ selectProject }){
    const [projects, setProjects] = useState([])


    // FETCH PROJECT DATA AND SET STATE
    useEffect(() => {
        fetch(url)
        .then(r => r.json())
        .then(setProjects)
    }, [])

    // REMOVE PROJECT
    function deleteProject(deleteProject){
        fetch(`${url}/${deleteProject.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(setProjects(projects.filter((project) => project.id !== deleteProject.id)))
    }


    // MAPS OVER PROJECTS TO DISPLAY EACH ONE AS A PROJECT COMPONET
    const displayProject = projects.map((project) => {
        return <Project 
            key={project.id}
            project={project}
            selectProject={selectProject}
            deleteProject={deleteProject}
        />
    })


    return (
        <div>
            <h2>Project Collection</h2>
            {displayProject}
        </div>
    )
}

export default Collection
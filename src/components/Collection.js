import React, { useState, useEffect } from "react"
import Project from "./Project"


const project_url = "http://localhost:3000/projects"
const user_url = "http://localhost:3000/users/1"

function Collection(){
const [projects, setProjects] = useState([])
const [user, setUser] = useState("")

useEffect(() => {
    fetch(project_url)
    .then(r => r.json())
    .then(setProjects)
}, [])

useEffect(() => {
    fetch(user_url)
    .then(r => r.json())
    .then(data => setUser(data.name))
}, [])

const displayProject = projects.map((project) => {
    return <Project 
        key={project.id}
        project={project}
    />
})

    return (
        <div className="collection-container">
            <div className="information-container">
                <p>{user}</p>
            </div>
            {displayProject}
        </div>
    )
}

export default Collection
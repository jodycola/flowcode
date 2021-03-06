import React, { useState, useEffect } from "react"
import Project from "./Project"


const project_url = "http://localhost:3000/projects"
const user_url = "http://localhost:3000/users"


function Collection(){
    const [projects, setProjects] = useState([])
    const [user, setUser] = useState("")
    console.log(projects)

useEffect(() => {
    fetch(project_url)
    .then(r => r.json())
    .then(setProjects)
}, [])

const displayProject = projects.map((project) => {

    console.log(project)

    return <Project 
        key={project.id}
        project={project}
    />
})

    return (
    //    
    //     <div className="collection-container">
    //     <div className="information-container">
    //         <p>{user}</p>
    //     </div>
        <div>
            <h1>Project Collection</h1>
            {displayProject}
        </div>
    // </div>

    )
       



}

export default Collection
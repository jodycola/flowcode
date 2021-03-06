import React, { useState, useEffect } from "react"
import Project from "./Project"


const project_url = "http://localhost:3000/projects"

function Collection({setSelectProject}){
    const [projects, setProjects] = useState([])

useEffect(() => {
    fetch(project_url)
    .then(r => r.json())
    .then(setProjects)
}, [])


const displayProject = projects.map((project) => {
    
    return <Project 
        setSelectProject={setSelectProject}
        key={project.id}
        project={project}
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
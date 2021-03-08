import React from "react"
import { FaTrash } from "react-icons/fa"


function Project({ project, selectProject, deleteProject, updateProject }){
    const { title, html, css, javascript } = project

    function handleSelect(){
        selectProject(project)
    }

    return (
    <div className="project-container" onClick={handleSelect}>
    <h1>{title}</h1>
        <div className="content-container">
            <div className="card">
            <div className="content">
               <div className="header">{title}</div>
                <div className="description">
                   <p>{html}</p>
                   <p>{css}</p>
                   <p>{javascript}</p>
                </div>
                <span className="x-icon" onClick={() => deleteProject(project)}>   
                    <FaTrash />
                </span>
            </div>
            </div>
        </div>
    </div>

    )
}

export default Project
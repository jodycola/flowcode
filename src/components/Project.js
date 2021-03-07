import React from "react"

function Project({ project, selectProject, deleteProject }){
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
               <div className="header" onClick={() => deleteProject(project)}>{title}</div>
                <div className="description">
                   <p>{html}</p>
                   <p>{css}</p>
                   <p>{javascript}</p>
                </div>
            </div>
            </div>
        </div>
    </div>

    )
}

export default Project
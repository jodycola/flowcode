import React from "react"

function Project({ project }){
    const { id, title, html, css, javascript } = project

    function selectProject(event){
        console.log(event.target)
    }

    return (
        <div className="project-container">
            <h1>{title}</h1>
            <p>{html}</p>
        </div>
    )
}

export default Project
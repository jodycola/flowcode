import React from "react"

function Project({ project, setSelectProject}){
    const { id, title, html, css, javascript } = project

   function handleSelect() {
       setSelectProject(id)
   }

  

    return (
        <div className="collection-container" onClick={handleSelect}>
   <h4>{title}</h4>
   <div className="content-container">
       <div className="card">
           <div className="content">
               <div className="header">{title}</div>
               <div className="description">
              {html}
               </div>
           </div>
       </div>
   </div>
</div>

    )
}

export default Project
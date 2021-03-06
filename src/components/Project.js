import React from "react"

function Project({ project }){
    const { id, title, html, css, javascript } = project

    function selectProject(event){
        console.log(event.target)
    }

    // return (
    //     <div className="project-container">
    //         <h1>{title}</h1>
    //         <p>{html}</p>
    //     </div>
    // )


    return (
        <div className="project-container">
   <h1>{title}</h1>
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








//     return (
//         <div className="collection-container">
//             <div className="information-container">
//                 <p>{user}</p>
//             </div>
//             {displayProject}
//         </div>

//         <div class="card">
//             <div class="content">
//                 <div class="header">Elliot Fu</div>
//                 <div class="description">
//                 Elliot Fu is a film-maker from New York.
//                 </div>
//             </div>
//         </div>

//     </div>
// </div>
    // )





}

export default Project
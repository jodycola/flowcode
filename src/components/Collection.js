// import NavBar from "./NavBar"

function Collection(){
    // return (
    //     <div className="collection-container">
    //         {/* <NavBar /> */}
    //         <div className="information-container">
    //             <h1> here is the info </h1>
    //         </div>
    //         <div className="project-container">
    //             <h1> here go the projects </h1>
    //         </div>
    //     </div>
    // )

    return (
<div className="collection-container">
        <div className="information-container">
                <h1> Information Here </h1>
        </div>
    <h1>Projects</h1>
    <div class="content-container">
        <div class="card">
            <div class="content">
                <div class="header">Html</div>
                <div class="description">
                Elliot Fu is a film-maker from New York.
                </div>
            </div>
        </div>

        <div class="card">
            <div class="content">
                <div class="header">CSS</div>
                <div class="description">
                Elliot Fu is a film-maker from New York.
                </div>
            </div>
        </div>

        <div class="card">
            <div class="content">
                <div class="header">Javascript</div>
                <div class="description">
                Elliot Fu is a film-maker from New York.
                </div>
            </div>
        </div>

        <div class="card">
            <div class="content">
                <div class="header">Elliot Fu</div>
                <div class="description">
                Elliot Fu is a film-maker from New York.
                </div>
            </div>
        </div>

    </div>
</div>
    )



}

export default Collection
import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import NavBar from "./NavBar"
import Main from "./Main"
import Collection from "./Collection"

const url = "http://localhost:3000/projects"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectProject, setSelectProject] = useState("")
  const [displayProject, setDisplayProject] = useState("")

  function toggleDark(){
    setDarkMode(!darkMode)
    if ( darkMode === false ) {
      document.body.style.backgroundColor = "#2e2d2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }

 useEffect(() => {

  fetch(`${url}/${selectProject}`)
  .then(response => response.json())
  .then(data => setDisplayProject(data))

 }, [])

 console.log(displayProject)

 function showProject() {
   
 }

  return (
  <div>
    <NavBar 
    toggleDark={toggleDark}
    />
    <Switch>
      <Route exact path="/">
        <Main
        darkMode={darkMode}
        selectProject={selectProject}
        onShowProject={showProject}
        
        />
      </Route>
      <Route exact path="/collection">
        <Collection setSelectProject={setSelectProject} />
      </Route>
    </Switch>
  </div>
  )
}

export default App;

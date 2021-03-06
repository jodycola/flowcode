import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"


// COMPONENTS
import NavBar from "./NavBar"
import Main from "./Main"
import Collection from "./Collection"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [allTheme, setAllTheme] = useState(false)
  const [selected, setSelected] = useState("")

  function toggleTheme(event){
    setAllTheme(event.target.value)
  }

  // DARK MODE TOGGLE
  function toggleDark(){
    setDarkMode(!darkMode)
    if ( darkMode === false ) {
      document.body.style.backgroundColor = "#2e2d2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }



  // SET SELECTED PROJECT STATE FOR CRUD ACTIONS
  function selectProject(project){
    setSelected(project)
  }

  return (
  <div>
    <NavBar 
    toggleDark={toggleDark}
    darkMode={darkMode}
    allTheme={allTheme}
    toggleTheme={toggleTheme}
       />
    <Switch>
      <Route exact path="/">
        <Main
        darkMode={darkMode}
        allTheme={allTheme}
        selected={selected}
        setSelected={setSelected}
        toggleTheme={toggleTheme}
        />
      </Route>
      <Route exact path="/collection">
        <Collection
        selectProject={selectProject} 
        darkMode={darkMode}
        />
      </Route>
    </Switch>
  </div>
  )
}

export default App;

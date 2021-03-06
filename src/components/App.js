import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import NavBar from "./NavBar"
import Main from "./Main"
import Collection from "./Collection"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDark(){
    setDarkMode(!darkMode)
    if ( darkMode === false ) {
      document.body.style.backgroundColor = "#2e2d2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
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
        />
      </Route>
      <Route exact path="/collection">
        <Collection />
      </Route>
    </Switch>
  </div>
  )
}

export default App;

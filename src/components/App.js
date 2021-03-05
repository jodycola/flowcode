import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
// COMPONENTS
import NavBar from "./NavBar"
import Main from "./Main"
import Collection from "./Collection"

const url = "http://localhost:3000/projects"

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

  function handleSave(html, css, js){
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({html, css, js}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
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
        handleSave={handleSave}
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

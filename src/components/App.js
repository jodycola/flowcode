import React, { useState } from "react"
import Editor from "./Editor"
import Display from "./Display"
import NavBar from "./NavBar"

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [darkMode, setDarkMode] = useState(false)

 const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `
  function toggleDark(){
    setDarkMode(!darkMode)
    console.log(darkMode)
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
    <div className="editor-panel">
      <Editor 
      mode="xml"
      language="HTML"
      value={html}
      onChange={setHtml}
      darkMode={darkMode}
      />
      <Editor 
      mode="css"
      language="CSS"
      value={css}
      onChange={setCss}
      darkMode={darkMode}
      />
      <Editor 
      mode="javascript"
      language="JAVASCRIPT"
      value={js}
      onChange={setJs}
      darkMode={darkMode}
      />
    </div>
    <div className="display-panel">
      <Display
      srcDoc={srcDoc}
      />
    </div>
  </div>
  )
}

export default App;

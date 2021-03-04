import React, { useState } from "react"
import AceEditor from "react-ace"
import Container from "./Container"

import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")

  const sourceCode = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `
  return (
  <div>
    <div>
      <AceEditor 
      mode="xml"
      onChange={setHtml}
      value={html}
      height="200px"
      />
      <AceEditor 
      mode="javascript"
      onChange={setJs}
      js={js}
      height="200px"
      />
      <AceEditor 
      mode="css"
      onChange={setCss}
      js={css}
      height="200px"
      />
    </div>
    <div>
      <iframe
      sourceCode={sourceCode}
      title="output"
      sandbox="allow-scripts"
      width="100%"
      />
    </div>
  </div>
  )
}

export default App;

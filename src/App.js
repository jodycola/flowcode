import React, { useState } from "react"
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-javascript"

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")

  const srcdoc = `
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
      mode="css"
      onChange={setCss}
      value={css}
      height="200px"
      />
      <AceEditor 
      mode="javascript"
      onChange={setJs}
      value={js}
      height="200px"
      />
    </div>
      <iframe
      srcdoc={srcdoc}
      title="title"
      sandbox="allow-scripts"
      width="100%"
      />
  </div>
  )
}

export default App;

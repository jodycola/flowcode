import React, { useState } from "react"
import AceEditor from "react-ace"
import Container from "./Container"

import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/theme-monokai"

function App() {
  const [value, setValue] = useState("")

  function changeValue(newValue) {
    setValue(newValue)
  }

  return (
  <div>
    <div>
      <AceEditor 
      mode="javascript"
      onChange={changeValue}
      value={value}
      editorProps= {{ $blockScrolling: true }}
      height="400px"
      />
    </div>
    <div>
      <Container 
      value={value}
      />
    </div>
  </div>
  )
}

export default App;

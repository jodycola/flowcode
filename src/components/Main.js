import React, { useState } from "react"
import Editor from "./Editor"
import Display from "./Display"

function Main({ darkMode, handleSave }){
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")

    const srcDoc = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `

return (
    <div className="main-container">
        <button className="save-button" onClick={() => handleSave}>
        Save
        </button>
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

export default Main
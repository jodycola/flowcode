import React from "react"
import AceEditor from "react-ace"

// Ace Build languages
import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-javascript"

// Ace Build Themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-github" 
import "ace-builds/src-noconflict/theme-solarized_dark" 
import "ace-builds/src-noconflict/theme-solarized_light"
import "ace-builds/src-noconflict/theme-twilight" 
import "ace-builds/src-noconflict/theme-tomorrow" 
import "ace-builds/src-noconflict/theme-kuroir" 
import "ace-builds/src-noconflict/theme-xcode" 
import "ace-builds/src-noconflict/theme-kuroir" 
import "ace-builds/src-noconflict/theme-textmate" 
import "ace-builds/src-noconflict/theme-terminal" 













function Editor({ mode, language, value, onChange, darkMode, allTheme}) {

//   const [allTheme, setAllTheme] = useState(false)

  // Theme Toggle
//   function toggleTheme(event){
//     setAllTheme(event.target.value)
//   }

    return (
        <div className="editor-container">
            <div className="editor-title" style={darkMode ? {color: "white"} : {color: "black"}}>
                {language}
            </div>   
            <AceEditor 
                className="text-editor"
                mode={mode}
                onChange={onChange}
                value={value}
                // theme={ darkMode ? "monokai" : "github" }
                theme={allTheme}
                height="200px"
                setOptions={{
                    wrap: true,
                    fontSize: "14px",
                }}
            />

            {/* <select onChange={toggleTheme}>
                <option> {allTheme ? "twilight": "monokai"} option 1</option>
                <option>{allTheme ? "solarized_dark" : "monokai"} option 2</option>
                <option>{allTheme ? "solarized_light" : "monokai"} option 3</option>
            </select> */}

            {/* <select onChange={toggleTheme}>
                <option value={allTheme ? "twilight" : "monokai"}>Theme1</option>
                <option value={allTheme ? "solarized_dark": "monokai"}>Theme2</option>
                <option value={allTheme ? "solarized_light" : "monokai"}>Theme3</option>
            </select> */}

        </div>
    )
}

export default Editor
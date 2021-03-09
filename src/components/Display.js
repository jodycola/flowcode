import React, {useRef} from "react"



function Display({ srcDoc }) {

    const myRef = useRef(null)
    function handleClick(){
    const iframeItem = myRef.current
        console.log(iframeItem.current.contentWindow)
    } 


    return (
        
        <iframe onClick={handleClick}
            className="frame"
            srcDoc={srcDoc}
            title="display"
            sandbox="allow-scripts"
            ref={myRef} 
        />
    )
}

export default Display
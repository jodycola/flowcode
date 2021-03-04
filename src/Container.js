function Container({ value, js }){
    
    console.log(js)

    const code =`
        ${value}
        `

    return (
        <div dangerouslySetInnerHTML={{
            __html: code
        }}>
        </div>
    )
}

export default Container

{/* <p id="demo"></p>
document.getElementById("demo").innerHTML = 5 + 6; */}
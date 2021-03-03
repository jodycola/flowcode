function Container({ value }){
    

    // const code =`
    //     console.log(${value})
    //    `


    return (
        <div>
        <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `console.log("yo");`
        }}></script>
        </div>
    )
}

export default Container
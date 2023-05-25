import React from "react"

function Hero(props) {
    console.log(props.text)
    const { name, text, myOtherKey} = props
    console.log(text)
    console.log(name)

    console.log(myOtherKey)

    return (
        
        <h1>{props.text} {props.myOtherKey}</h1>
    )
}
export default Hero;
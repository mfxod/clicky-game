import React from "react"
import "./style.css"

// test
const test = 2 + 3
// do I write the logic here or in App.js?

function Score(props) {
    return (
        <div className="navbar sticky-top">
            <h4>Click an image to earn a point. Remember not to click it more than once!</h4>
            <h2>Score: {test} | High Score: {test}</h2>
        </div>
    )
}
    
export default Score
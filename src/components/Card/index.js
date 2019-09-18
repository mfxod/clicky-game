import React from "react"
import "./style.css"

function Card(props) {
    return (
      <div className="card mx-auto">
        <div className="img-container mx-auto">
          <img alt={props.name} src={props.image} onClick={() => props.clickImage(props.id)}/>
        </div>
      </div>
    )
}
    
export default Card
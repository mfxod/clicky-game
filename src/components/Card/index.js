import React from "react"
import "./style.css"

function Card(props) {
    return (
      <div className="card mx-auto">
        <div className="img-container mx-auto">
          <img alt={props.name} src={props.image} />
        </div>
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove"></span> */}
      </div>
    )
}
    
export default Card
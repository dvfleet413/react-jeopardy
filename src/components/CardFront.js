import React from 'react'

const CardFront = (props) => {
    return(
        <div className="card-front" onClick={event => {props.handleClick(event)}}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default CardFront
import React from 'react'

const CategoryTitle = (props) => {
    return(
        <div className="title-card card-general">
            <h4>{props.category}</h4>
        </div>
    )
}

export default CategoryTitle
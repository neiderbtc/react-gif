import React from 'react'

const ImagenComponent = ({id, title, url})=> {
    return (
        <div>
        <h5>{ title }</h5>
        <div className="card-imagen">
            <img src={url} alt={title} />
        </div>
        </div>
    )
}
export default ImagenComponent

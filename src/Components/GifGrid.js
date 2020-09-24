import React from 'react'
import useFetchGifs from '../Hooks/useFetchGifs'
import ImagenComponent from './ImagenComponent';

const  GifGrid= ({category}) => {

    const {data:imgs, loading} =  useFetchGifs(category)  

    return (
        <div>
        <h3>{category}</h3>
        { loading && <p>Cargando..</p> }
        <div className="card-box animate__animated animate__bounce">
            {
                imgs.map(img => <ImagenComponent key={img.id} {...img}/>)
            }
        </div>
            </div>
    )
}

export default GifGrid
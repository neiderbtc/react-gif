import React, { useState }  from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const HeaderComponents = () => {
    
    const [categorias,setCategorias] = useState(['musica'])

    return (
        <div>
            <h1>Buscador de gifs</h1>
            <AddCategory setCategorias={setCategorias}/>
            <ol>
            {
                
                categorias.map(cat=> <GifGrid key={cat} category={cat}/>)
            }        
                </ol>
        </div>
    )
}

export default HeaderComponents
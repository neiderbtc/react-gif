// import React from 'react'
const getGif = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3h3s1mA1gtuYipbpV3xGHdGxOpwNXZi3`;
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
    
}

export default getGif
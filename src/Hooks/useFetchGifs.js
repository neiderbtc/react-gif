import {useEffect, useState} from 'react'
import getGif from '../Helpers/getGif'

const useFetchGifs = (category)=> {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect(()=>{
        getGif(category)
        .then(imgs => {
            setstate({
                data:imgs,
                loading: false
            })
        })
    },[category])



    return state
}
export default useFetchGifs
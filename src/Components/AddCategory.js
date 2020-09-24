import React, { useState } from 'react'

const AddCategory = ({setCategorias}) => {
    const [InputText, setInputText] = useState('')
    const inputChange = (e) =>{
        setInputText(e.target.value)
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        if(InputText.trim().length> 2){
            setCategorias(cat => [InputText,...cat])
            setInputText('')
        }
    }
    return (
        <form onSubmit={formSubmit}>
            <input type="text" placeholder="Buscar.." onChange={inputChange} value={InputText}/>
        </form>
    )
}

export default AddCategory
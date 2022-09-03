import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const ResponceEdit = () => {
    const [nameAuthor,setNameAuthor]=useState("");
    const [description,setDescription]=useState("");
    const {AddResponce}=useAction();
  return (
    <details>
        <summary className='name__menu'>відгуки</summary>
        <p>імя автор письма</p>
        <input value={nameAuthor} onChange={(e)=>setNameAuthor(e.target.value)}/>
        <p>опис</p>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button onClick={()=>AddResponce(nameAuthor,description)}>add</button>
    </details>
  )
}

export default ResponceEdit
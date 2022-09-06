import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const ResponceEdit = () => {
    const [nameAuthor, setNameAuthor] = useState("");
    const [description, setDescription] = useState("");
    const { AddResponce } = useAction();
    return (
        <div className='admin-panel-response'>
            <div className='admin-block-response'>
                <p>Імя автор письма</p>
                <input value={nameAuthor} onChange={(e) => setNameAuthor(e.target.value)} />
                <p>Опис</p>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <button onClick={() => AddResponce(nameAuthor, description)}>Добавити</button>
            </div>
        </div>
    )
}

export default ResponceEdit
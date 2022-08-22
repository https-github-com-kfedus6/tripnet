import { Editor } from '@tinymce/tinymce-react';
import React from 'react'
import { useState } from 'react';
import { useAction } from '../../hooks/useAction';

const FAQEdit = () => {
    const [nameUa,setNameUa]=useState("");
    const [nameRu,setNameRu]=useState("");
    const [ua,setUa]=useState("");
    const [ru,setRu]=useState("");
    const {AddFAQ}=useAction();
  return ( 
    <details>
        <summary className='name__menu'>добавити FAQ</summary>
        
            <h1>
                українська версія
            </h1>
            <input onChange={e=>setNameUa(e.target.value)} value={nameUa}/>
            <Editor value={ua}
              apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
              onEditorChange={(newText)=>setUa(newText)}
            />
             <h1>російська версія</h1>
             <input onChange={e=>setNameRu(e.target.value)} value={nameRu}/>
            <Editor value={ru}
              apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
              onEditorChange={(newText)=>setRu(newText)}
            />
        <button onClick={()=>AddFAQ(ua,ru,nameUa,nameRu)}>add</button>
    </details>
  )
}

export default FAQEdit
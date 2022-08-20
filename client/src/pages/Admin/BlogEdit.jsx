import { Editor } from '@tinymce/tinymce-react';
import React from 'react'
import { useState } from 'react';
import { useAction } from '../../hooks/useAction';

const BlogEdit = () => {
    const [image,setImage]=useState(undefined);
    const [nameUa,setNameUa]=useState("");
    const [nameRu,setNameRu]=useState("");
    const [ua,setUa]=useState("");
    const [ru,setRu]=useState("");
    const {AddBlog}=useAction();
    return (
    <div className="blog__edit__main">
        <details>
            <summary className='name__menu'>блог</summary>
            виберіть фотографію для статі
            <div className='blog__edit__set__photo'>
                <input type="file" id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e=>setImage(e.target.files?.[0])}/>
            </div>
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
            <button onClick={()=>AddBlog(ua,ru,image,[nameUa,nameRu].join("//"))}>add</button>
        </details>
    </div>
  )
}

export default BlogEdit
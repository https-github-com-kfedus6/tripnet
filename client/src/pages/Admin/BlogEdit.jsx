import { Editor } from '@tinymce/tinymce-react';
import React from 'react'
import { useState } from 'react';
import { useAction } from '../../hooks/useAction';

const BlogEdit = () => {
    const [image, setImage] = useState(undefined);
    const [nameUa, setNameUa] = useState("");
    const [nameRu, setNameRu] = useState("");
    const [miniDescriptionUA,setMiniDescriptionUA]=useState("");
    const [miniDescriptionRU,setMiniDescriptionRU]=useState("");
    const [ua, setUa] = useState("");
    const [ru, setRu] = useState("");
    const { AddBlog } = useAction();
    return (
        <div className="admin-panel-blog">
            <div className='admin-blok-blog'>
                <span>Виберіть фотографію для статі</span>
                <div className='blog__edit__set__photo'>
                    <input type="file" id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e => setImage(e.target.files?.[0])} />
                </div>
                <h1>
                    Українська версія
                </h1>
                <div className='admin-blog-input'>
                    <p>Назва</p>
                    <input maxLength={60} onChange={e => setNameUa(e.target.value)} value={nameUa} />
                </div>
                <div className='admin-blog-input'>
                    <p>міні опис</p>
                    <input maxLength={200} onChange={e => setMiniDescriptionUA(e.target.value)} value={miniDescriptionUA} />
                </div>
                <br />
                <Editor value={ua}
                    apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
                    onEditorChange={(newText) => setUa(newText)}
                />
                <h1>Російська версія</h1>
               
                <div className='admin-blog-input'>
                    <p>Назва</p>
                    <input maxLength={60} onChange={e => setNameRu(e.target.value)} value={nameRu} />
                </div> 
                <div className='admin-blog-input'>
                    <p>міні опис</p>
                    <input maxLength={200} onChange={e => setMiniDescriptionRU(e.target.value)} value={miniDescriptionRU} />
                </div>
                <br />
                <Editor value={ru}
                    apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
                    onEditorChange={(newText) => setRu(newText)}
                />
                <br />
                <button onClick={() => AddBlog(ua, ru, image, [nameUa, nameRu].join("//"),[miniDescriptionUA,miniDescriptionRU].join("//"))}>Добавити</button>
            </div>
        </div>
    )
}

export default BlogEdit
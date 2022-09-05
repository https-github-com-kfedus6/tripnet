import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const NovetlyEdit = () => {
    const [image, setImage] = useState();
    const [ua, setUa] = useState("");
    const [ru, setRu] = useState("");
    const { AddNovetly } = useAction();
    return (
        <div>
            виберіть фотографію країни
            <div className='blog__edit__set__photo'>
                <input type="file" id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e => setImage(e.target.files?.[0])} />
            </div>
            <h1>
                українська версія
            </h1>
            <input onChange={(e) => setUa(e.target.value)} value={ua} />
            <h1>
                російська версія
            </h1>
            <input onChange={(e) => setRu(e.target.value)} value={ru} /><br />

            <button onClick={() => AddNovetly(ua, ru, image)}>add</button>
        </div>
    )
}

export default NovetlyEdit
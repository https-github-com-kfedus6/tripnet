import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const FlightsEdit = () => {
    const {AddFlight}=useAction();
    const [image,setImage]=useState();
    const [startDate,setStartDate]=useState("дд.мм.рррр");
    const [finishDate,setFinishDate]=useState("дд.мм.рррр");
    const [price,setPrice]=useState("");
    const [startPosition,SetStartPosition]=useState("");
    const [finishPosition,SetFinishPosition]=useState("");
    const [startTime,setStartTime]=useState("00.00");
    const [finishTime,setFinishTime]=useState("00.00");
    const [countFreePlace,setCountFreePlace]=useState(1);
    const [timeFlight,setTimeFlight]=useState("");
    const [descriptionUa,setDescriptionUa]=useState("");
    const [descriptionRu,setDescriptionRu]=useState("");
    
    return (
    <details>
        <summary className='name__menu'>добавити рейс</summary>
        <div className='flight__edit'>
            <p>фотографії рейсу(не обовязково)</p>
            <div className='blog__edit__set__photo'>
                <input type="file" id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e=>setImage(e.target.files?.[0])}/>
            </div>
            <p>дата відправлення:</p>
            <input type={"date"} value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            <p>дата прибуття:</p>
            <input type={"date"} value={finishDate} onChange={(e)=>setFinishDate(e.target.value)}/>
            <p>ціна квитка</p>
            <input value={price} onChange={e=>setPrice(e.target.value)}/>
            <p>місто виїзду:</p>
            <input value={startPosition} onChange={e=>SetStartPosition(e.target.value)}/>
            <p>місто приїзду:</p>
            <input value={finishPosition} onChange={(e)=>SetFinishPosition(e.target.value)}/>
            <p>година виїзду:</p>
            <input type={"time"} value={startTime} onChange={(e)=>setStartTime(e.target.value)}/>
            <p>година приїзду</p>
            <input type={"time"} value={finishTime} onChange={(e)=>setFinishTime(e.target.value)}/>
            <p>кількість вільних місць:</p>
            <input type={"number"} min={1} onChange={e=>setCountFreePlace(e.target.value)} value={countFreePlace}/>
            <p>тривалість рейсу</p>
            <input value={timeFlight} onChange={e=>setTimeFlight(e.target.value)}/>
            <p></p>
            <button onClick={()=>AddFlight()}>add</button>
        </div>
    </details>
  )
}

export default FlightsEdit
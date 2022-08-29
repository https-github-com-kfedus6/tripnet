import { Editor } from '@tinymce/tinymce-react';
import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const FlightsEdit = () => {
    const {AddFlight}=useAction();
    const [image,setImage]=useState();
    const [startDate,setStartDate]=useState("дд.мм.рррр");
    const [finishDate,setFinishDate]=useState("дд.мм.рррр");
    const [price,setPrice]=useState("");
    const [startPositionUA,SetStartPositionUA]=useState("");
    const [finishPositionUA,SetFinishPositionUA]=useState("");
    const [startPositionRU,SetStartPositionRU]=useState("");
    const [finishPositionRU,SetFinishPositionRU]=useState("");
    const [startTime,setStartTime]=useState("00.00");
    const [finishTime,setFinishTime]=useState("00.00");
    const [countFreePlace,setCountFreePlace]=useState(1);
    const [timeFlightUA,setTimeFlightUA]=useState("");
    const [timeFlightRU,setTimeFlightRU]=useState("");
    const [descriptionUa,setDescriptionUa]=useState("");
    const [descriptionRu,setDescriptionRu]=useState("");
    const [isWifi, setIsWifi]=useState(false);
    const [isWC, setIsWC]=useState(false);
    const [is220V, setIs200V]=useState(false);
    const [isMultimedia,setIsMultimedia]=useState(false);
    const [isAirConditioning,setIsAirConditioning]=useState(false);
    const [map,setMap]=useState("");


    return (
    <details>
        <summary className='name__menu'>добавити рейс</summary>
        <div className='flight__edit'>
            <p>фотографія рейсу(не обовязково)</p>
            <div className='blog__edit__set__photo'>
                <input type="file" id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e=>setImage(e.target.files?.[0])}/>
            </div>
            <p>дата відправлення:</p>
            <input type={"date"} value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            <p>дата прибуття:</p>
            <input type={"date"} value={finishDate} onChange={(e)=>setFinishDate(e.target.value)}/>
            <p>ціна квитка в грн</p>
            <input value={price} type={"number"} onChange={e=>setPrice(e.target.value)}/>
            <p>місто виїзду укр:</p>
            <input value={startPositionUA} onChange={e=>SetStartPositionUA(e.target.value)}/>
            <p>місто приїзду укр:</p>
            <input value={finishPositionUA} onChange={(e)=>SetFinishPositionUA(e.target.value)}/>
            <p>місто виїзду рос:</p>
            <input value={startPositionRU} onChange={e=>SetStartPositionRU(e.target.value)}/>
            <p>місто приїзду рос:</p>
            <input value={finishPositionRU} onChange={(e)=>SetFinishPositionRU(e.target.value)}/>
            <p>година виїзду:</p>
            <input type={"time"} value={startTime} onChange={(e)=>setStartTime(e.target.value)}/>
            <p>година приїзду</p>
            <input type={"time"} value={finishTime} onChange={(e)=>setFinishTime(e.target.value)}/>
            <p>кількість вільних місць:</p>
            <input type={"number"} min={1} onChange={e=>setCountFreePlace(e.target.value)} value={countFreePlace}/>
            <p>тривалість рейсу укр</p>
            <input value={timeFlightUA} onChange={e=>setTimeFlightUA(e.target.value)}/>
            <p>тривалість рейсу рос</p>
            <input value={timeFlightRU} onChange={e=>setTimeFlightRU(e.target.value)}/>
            <p>wifi:<input onChange={()=>setIsWifi(!isWifi)} type={"checkbox"}/></p>
            <p>туалет:<input onChange={()=>setIsWC(!isWC)} type={"checkbox"}/></p>
            <p>розетка:<input onChange={()=>setIs200V(!is220V)} type={"checkbox"}/></p>
            <p>мультимедія:<input onChange={()=>setIsMultimedia(!isMultimedia)} type={"checkbox"}/></p>
            <p>кондиціонер:<input onChange={()=>setIsAirConditioning(!isAirConditioning)} type={"checkbox"}/></p>
            <p>опис укр</p>
            <Editor value={descriptionUa}
              apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
              onEditorChange={(newText)=>setDescriptionUa(newText)}
            />
            <p>опис рос</p>
            <Editor value={descriptionRu}
              apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
              onEditorChange={(newText)=>setDescriptionRu(newText)}
            />
            <p>карта</p>
            <input value={map} onChange={e=>setMap(e.target.value)}/>
            <button onClick={()=>AddFlight(image,price,startPositionUA,startPositionRU,finishPositionUA
              ,finishPositionRU,startDate,finishDate,startTime,finishTime,timeFlightUA,timeFlightRU,
              countFreePlace,isWifi,isWC,is220V,isMultimedia,isAirConditioning,
              descriptionUa,descriptionRu,map)}>add</button>
        </div>
    </details>
  )
}

export default FlightsEdit;

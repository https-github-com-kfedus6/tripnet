import { Editor } from '@tinymce/tinymce-react';
import React from 'react'
import { useState } from 'react'
import { useAction } from '../../hooks/useAction';

const FlightsEdit = () => {

    const { AddFlight } = useAction();
    const [flagStartImg, setFlagStartImg] = useState(undefined);
    const [flagFinishImg, setFlagFinishImg] = useState(undefined);
    const [startDate, setStartDate] = useState("дд.мм.рррр");
    const [finishDate, setFinishDate] = useState("дд.мм.рррр");
    const [price, setPrice] = useState("");
    const [startPositionUA, SetStartPositionUA] = useState("");
    const [finishPositionUA, SetFinishPositionUA] = useState("");
    const [startPositionRU, SetStartPositionRU] = useState("");
    const [finishPositionRU, SetFinishPositionRU] = useState("");
    const [streetStartPositionUA, setStreetStartPositionUA] = useState("");
    const [streetFinishPositionUA, setStreetFinishPositionUA] = useState("");
    const [streetStartPositionRU, setStreetStartPositionRU] = useState("");
    const [streetFinishPositionRU, setStreetFinishPositionRU] = useState("");
    const [startTime, setStartTime] = useState("00.00");
    const [finishTime, setFinishTime] = useState("00.00");
    const [countFreePlace, setCountFreePlace] = useState(1);
    const [timeFlightUA, setTimeFlightUA] = useState("");
    const [timeFlightRU, setTimeFlightRU] = useState("");
    const [descriptionUa, setDescriptionUa] = useState("");
    const [descriptionRu, setDescriptionRu] = useState("");
    const [isWifi, setIsWifi] = useState(false);
    const [isWC, setIsWC] = useState(false);
    const [is220V, setIs200V] = useState(false);
    const [isMultimedia, setIsMultimedia] = useState(false);
    const [isAirConditioning, setIsAirConditioning] = useState(false);
    const [map, setMap] = useState("");

    return (
        <div className='admin-panel-flight'>
            <div className='admin-block-flight'>
                <div>
                    <p>Фотографія прапору рейсу виїзду (обов'язково):</p>
                    <input type={"file"} id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e => { setFlagStartImg(e.target.files?.[0]) }} />
                </div>
                <div>
                    <p>Фотографія прапору рейсу приїзду (обов'язково):</p>
                    <input type={"file"} id="visitorphoto" name="visitorPhoto" accept="image/*" capture onChange={e => { setFlagFinishImg(e.target.files?.[0]) }} />
                </div>
                <div>
                    <p>Місто виїзду укр:</p>
                    <input value={startPositionUA} onChange={e => SetStartPositionUA(e.target.value)} />
                </div>
                <div>
                    <p>Місто приїзду укр:</p>
                    <input value={finishPositionUA} onChange={(e) => SetFinishPositionUA(e.target.value)} />
                </div>
                <div>
                    <p>Місто виїзду рос:</p>
                    <input value={startPositionRU} onChange={e => SetStartPositionRU(e.target.value)} />
                </div>
                <div>
                    <p>Місто приїзду рос:</p>
                    <input value={finishPositionRU} onChange={(e) => SetFinishPositionRU(e.target.value)} />
                </div>
                <div>
                    <p>Вулиця посадки укр:</p>
                    <input value={streetStartPositionUA} onChange={(e) => setStreetStartPositionUA(e.target.value)} />
                </div>
                <div>
                    <p>Вулиця висадки укр:</p>
                    <input value={streetFinishPositionUA} onChange={(e) => setStreetFinishPositionUA(e.target.value)} />
                </div>
                <div>
                    <p>Вулиця посадки рос:</p>
                    <input value={streetStartPositionRU} onChange={(e) => setStreetStartPositionRU(e.target.value)} />
                </div>
                <div>
                    <p>Вулиця висадки рос:</p>
                    <input value={streetFinishPositionRU} onChange={(e) => setStreetFinishPositionRU(e.target.value)} />
                </div>
                <div>
                    <p>Дата відправлення:</p>
                    <input type={"date"} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <p>Дата прибуття:</p>
                    <input type={"date"} value={finishDate} onChange={(e) => setFinishDate(e.target.value)} />
                </div>
                <div>
                    <p>Ціна квитка в грн</p>
                    <input value={price} type={"number"} onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <p>Година виїзду:</p>
                    <input type={"time"} value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div>
                    <p>Година приїзду</p>
                    <input type={"time"} value={finishTime} onChange={(e) => setFinishTime(e.target.value)} />
                </div>
                <div>
                    <p>Кількість вільних місць:</p>
                    <input type={"number"} min={1} onChange={e => setCountFreePlace(e.target.value)} value={countFreePlace} />
                </div>
                <div>
                    <p>Тривалість рейсу укр</p>
                    <input value={timeFlightUA} onChange={e => setTimeFlightUA(e.target.value)} />
                </div>
                <div>
                    <p>Тривалість рейсу рос</p>
                    <input value={timeFlightRU} onChange={e => setTimeFlightRU(e.target.value)} />
                </div>
                <p>Wi-Fi:<input onChange={() => setIsWifi(!isWifi)} type={"checkbox"} /></p>
                <p>Туалет:<input onChange={() => setIsWC(!isWC)} type={"checkbox"} /></p>
                <p>Розетка:<input onChange={() => setIs200V(!is220V)} type={"checkbox"} /></p>
                <p>Мультимедія:<input onChange={() => setIsMultimedia(!isMultimedia)} type={"checkbox"} /></p>
                <p>Кондиціонер:<input onChange={() => setIsAirConditioning(!isAirConditioning)} type={"checkbox"} /></p>
                <p>Опис українською</p>
                <Editor value={descriptionUa}
                    apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
                    onEditorChange={(newText) => setDescriptionUa(newText)}
                />
                <p>Опис россійською</p>
                <Editor value={descriptionRu}
                    apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
                    onEditorChange={(newText) => setDescriptionRu(newText)}
                />
                <div>
                    <p>Силка на карту</p>
                    <input value={map} onChange={e => setMap(e.target.value)} />
                </div>
                <br />
                <div>
                    <button onClick={() => AddFlight(flagStartImg, flagFinishImg, price, startPositionUA, startPositionRU, finishPositionUA,
                        finishPositionRU, streetStartPositionUA, streetStartPositionRU, streetFinishPositionUA, streetFinishPositionRU,
                        startDate, finishDate, startTime, finishTime, timeFlightUA, timeFlightRU,
                        countFreePlace, isWifi, isWC, is220V, isMultimedia, isAirConditioning,
                        descriptionUa, descriptionRu, map)}>Добавити</button>
                </div>
            </div>
        </div>
    )
}

export default FlightsEdit;

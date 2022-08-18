import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const FlightsItem = ({ item, sumOld, sumYoung }) => {
    const navigate = useNavigate()

    return (
        <div className='item-flight'>
            <div className='item-time'>
                <span>{item.startTime}</span>
                <span>{item.timeFlight}.</span>
                <span>{item.finishTime}</span>
            </div>
            <div className='item-date'>
                <span>{item.startData}</span>
                <span>{item.finishDate}</span>
            </div>
            <div className='item-position'>
                <span>{item.startPosition}</span>
                <span>{item.finishPosition}</span>
            </div>
            <div className='btn-buy'>
                <div>
                    <NavLink to={`/flight/${item.id}`}>Дізнатися більше про рейс!</NavLink>
                </div>
                <div className='free-place'>
                    <span>Залишилось всього {item.countFreePlace} місце!</span>
                </div>
                <div>
                    <button onClick={() => navigate(`/formBuy/${sumOld}/${sumYoung}`)}><div><FaShoppingCart /></div><span>{item.price}.00 UAH</span></button>
                </div>
            </div>
        </div >
    )
}

export default FlightsItem;
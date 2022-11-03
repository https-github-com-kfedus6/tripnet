import React from 'react'

const FlightParams = ({ status }) => {
    return (
        <div className='items-comfort'>
            <div className={status.isMultimedia ? 'item-comfort' : 'comfort-status'}>
                <img src={process.env.REACT_APP_API_URL + "multimedia.png"} />
                <span>Мультимедія</span>
            </div>
            <div className={status.isWifi ? 'item-comfort' : 'comfort-status'}>
                <img src={process.env.REACT_APP_API_URL + "wifi.png"} />
                <span>Wi-Fi</span>
            </div>
            <div className={status.is220V ? 'item-comfort' : 'comfort-status'}>
                <img src={process.env.REACT_APP_API_URL + "220v.png"} />
                <span>Розетки</span>
            </div>
            <div className={status.isAirConditioning ? 'item-comfort' : 'comfort-status'}>
                <img src={process.env.REACT_APP_API_URL + "air_conditioner.png"} />
                <span>Кондиціонер</span>
            </div>
            <div className={status.isWC ? 'item-comfort' : 'comfort-status'}>
                <img src={process.env.REACT_APP_API_URL + "toilet.png"} />
                <span>Туалет</span>
            </div>
        </div>
    )
}

export default FlightParams;
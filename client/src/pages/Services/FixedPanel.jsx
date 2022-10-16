import { t } from 'i18next';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FixedPanel = () => {
    const navigate=useNavigate();
  return (
    <div className="services__fixed__panel">
        <div onClick={()=>navigate("/services/reservation_online")}>
            <img src={process.env.REACT_APP_API_URL+"reservation_online.png"}/>
            <div>{t("services.reservation_online")}</div>
        </div>
        <div onClick={()=>navigate("/services/booking_management")}>
            <img src={process.env.REACT_APP_API_URL+"booking_management.png"}/>
            <div>{t("services.booking_management")}</div>
        </div>
        <div onClick={()=>navigate("/services/luggage_transportation")}>
            <img src={process.env.REACT_APP_API_URL+"luggage_transportation.png"}/>
            <div>{t("services.luggage_transportation")}</div>
        </div>
        <div onClick={()=>navigate("/services/transportation_animals")}>
            <img src={process.env.REACT_APP_API_URL+"transportation_animals.png"}/>
            <div>{t("services.transportation_animals")}</div>
        </div>
    </div>
  )
}

export default FixedPanel
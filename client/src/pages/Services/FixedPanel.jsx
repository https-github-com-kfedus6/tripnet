import { t } from 'i18next';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const FixedPanel = ({indexService}) => {
    const {language}=useSelector(state=>state.language);
    useEffect(()=>{
  
    },[language]);
    const navigate=useNavigate();
  return (
    <div className="services__fixed__panel">
        <div onClick={()=>navigate("/services/reservation_online")}>
            {indexService!=1?
                <img src={process.env.REACT_APP_API_URL+"reservation_online.png"}/>
                :
                <div className='service__select'/>}
            <div>{t("services.reservation_online")}</div>
        </div>
        <div onClick={()=>navigate("/services/booking_management")}>
            {indexService!=2?
                <img src={process.env.REACT_APP_API_URL+"booking_management.png"}/>
                :
                <div className='service__select'/>}
            <div>{t("services.booking_management")}</div>
        </div>
        <div onClick={()=>navigate("/services/luggage_transportation")}>
            {indexService!=3?
                <img src={process.env.REACT_APP_API_URL+"luggage_transportation.png"}/>
                :
                <div className='service__select'/>}
            <div>{t("services.luggage_transportation")}</div>
        </div>
        <div onClick={()=>navigate("/services/transportation_animals")}>
            {indexService!=4?
                <img src={process.env.REACT_APP_API_URL+"transportation_animals.png"}/>
                :
                <div className='service__select'/>}
            <div>{t("services.transportation_animals")}</div>
        </div>
    </div>
  )
}

export default FixedPanel
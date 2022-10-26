import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FixedPanel from '../FixedPanel'
import AdditionalInformation from './AdditionalInformation'

const ReservationManagement = () => {
    const {language}=useSelector(state=>state.language);
    useEffect(()=>{
  
    },[language]);
  return (
    <div className='service__page__main'>
      <div className="service__page__content">
        <div className="service__page__main__title">
          {t("services.reservation_management_main_title")}
        </div>
        <div className="service__page__title">
          {t("services.reservation_management_title_1")}
        </div>
        <div className="service__page__description">
          {t("services.reservation_management_description_1")}
        </div>
        <div className="service__page__title">
          {t("services.reservation_management_title_2")}
        </div>
        <div className="service__page__description">
            {t("services.reservation_management_description_2")}    
        </div>
        <div className="service__page__title">
          {t("services.reservation_management_title_3")}
        </div>
        <div className="service__page__description">
            {t("services.reservation_management_description_3")}    
            <ol>
                <li>{t("services.reservation_management_description_3_li_1")}</li>
                <li>{t("services.reservation_management_description_3_li_2")}</li>
                <li>{t("services.reservation_management_description_3_li_3")}</li>
            </ol>
        </div>
        <AdditionalInformation/>
      </div>
      <div className='fixed__panel'>
          <FixedPanel indexService={2}/>
      </div>
    </div>
  )
}

export default ReservationManagement
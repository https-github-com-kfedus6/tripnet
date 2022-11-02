import { Breadcrumbs, Typography } from '@mui/material'
import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import FixedPanel from '../FixedPanel'
import AdditionalInformation from './AdditionalInformation'

const ReservationOnline = () => {
  const {language}=useSelector(state=>state.language);
  useEffect(()=>{

  },[language]);
  return (
    <>
      <div className='bread__crumbs__main'>
          <Breadcrumbs>
              <NavLink to="/">
                  {t("header.first_link")}
              </NavLink>
              <NavLink to="/services">
                  {t("footer.services")}
              </NavLink>
              <Typography color="text.primary">
                {t("services.reservation_online_main_title")}
              </Typography>
          </Breadcrumbs>
      </div>
      <div className='service__page__main'>
        <div className="service__page__content">
          <div className="service__page__main__title">
            {t("services.reservation_online_main_title")}
          </div>
          <div className="service__page__title">
            {t("services.reservation_online_title_1")}
          </div>
          <div className="service__page__description">
            {t("services.reservation_online_description_1")}
          </div>
          <div className="service__page__title">
            {t("services.reservation_online_title_2")}
          </div>
          <div className="service__page__description">
            <ol>
              <li>{t("services.reservation_online_description_2_li_1")}</li>
              <li>{t("services.reservation_online_description_2_li_2")}</li>
              <li>{t("services.reservation_online_description_2_li_3")}</li>
              <li>{t("services.reservation_online_description_2_li_4")}</li>
            </ol>
          </div>
          <AdditionalInformation/>
        </div>
        <div className='fixed__panel'>
            <FixedPanel indexService={1}/>
        </div>
      </div>
    </>
  )
}

export default ReservationOnline
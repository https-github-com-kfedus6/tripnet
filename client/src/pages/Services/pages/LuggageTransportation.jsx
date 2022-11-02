import { Breadcrumbs, Typography } from '@mui/material'
import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import FixedPanel from '../FixedPanel'
import AdditionalInformation from './AdditionalInformation'

const LuggageTransportation = () => {
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
              <Typography color="text.primary">Блог</Typography>
          </Breadcrumbs>
      </div>
      <div className='service__page__main'>
        <div className="service__page__content">
          <div className="service__page__main__title">
            {t("services.luggage_main_title")}
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_1")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_1")}
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_2")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_2")}
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_3")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_3")}
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_4")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_4")}
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_5")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_5")}
              <ul>
                <li>
                  {t("services.luggage_description_5_li_1")}
                </li>
                <li>
                  {t("services.luggage_description_5_li_2")}
                </li>
              </ul>
          </div>
          <div className="service__page__title">
            {t("services.luggage_title_6")}
          </div>
          <div className="service__page__description">
            {t("services.luggage_description_6")}
          </div>
          <AdditionalInformation/>
        </div>
        <div className='fixed__panel'>
            <FixedPanel indexService={3}/>
        </div>
      </div>
    </>
  )
}

export default LuggageTransportation
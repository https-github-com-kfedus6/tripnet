import { Breadcrumbs, Typography } from '@mui/material'
import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import FixedPanel from '../FixedPanel'
import AdditionalInformation from './AdditionalInformation'

const TransportationAnimals = () => {
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
            {t("services.transportation_animal_main_title")}
          </div>
          <div className="service__page__title">
            {t("services.transportation_animal_title_1")}
          </div>
          <div className="service__page__description">
            {t("services.transportation_animal_description_1")}
          </div>
          <div className="service__page__title">
            {t("services.transportation_animal_title_2")}
          </div>
          <div className="service__page__description">
            <div className="service__page__description">
              {t("services.transportation_animal_description_2")}
            </div>
            <ol>
              <li>{t("services.transportation_animal_description_2_li_1")}</li>
              <li>{t("services.transportation_animal_description_2_li_2")}</li>
              <li>{t("services.transportation_animal_description_2_li_3")}</li>
              <li>{t("services.transportation_animal_description_2_li_4")}</li>
              <li>{t("services.transportation_animal_description_2_li_5")}</li>
            </ol>
          </div>
          <AdditionalInformation/>
        </div>
        <div className='fixed__panel'>
            <FixedPanel indexService={4}/>
        </div>
      </div>
    </>
  )
}

export default TransportationAnimals
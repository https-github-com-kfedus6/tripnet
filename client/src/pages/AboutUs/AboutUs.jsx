import { Breadcrumbs, Typography } from '@mui/material';
import { t } from 'i18next';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useAction } from '../../hooks/useAction'

const AboutUs = () => {
  const {aboutUs}=useSelector(state=>state.aboutUs);
  const { GetAboutUs }=useAction();
  const {language}=useSelector(state=>state.language)
  useEffect(()=>{
    if(aboutUs==undefined){
      GetAboutUs();
    }
  },[]);
  useEffect(()=>{

  },[language])
  function createMarkup(text) { return {__html: text}; };
  return ( 
    <>
    <div className='bread__crumbs__main'>
      <Breadcrumbs>
          <NavLink to="/">
              {t("header.first_link")}
          </NavLink>
          <Typography color="text.primary">{t("header.fourth_link")}</Typography>
      </Breadcrumbs>
    </div>
      <p className='home__title'>{t("header.fourth_link")}</p>
      <div className="about__us__main">
        {aboutUs!=undefined?<div className='about__us__value' dangerouslySetInnerHTML=
        {createMarkup(aboutUs.description[language])}></div>:<></>}
      </div>
    </>
  )
}

export default AboutUs


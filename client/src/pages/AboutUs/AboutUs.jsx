import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
  function createMarkup(text) { return {__html: text}; };
  return ( 
    aboutUs!=undefined?<div dangerouslySetInnerHTML=
    {createMarkup(aboutUs.description[language])}></div>:<></>
  )
}

export default AboutUs
import { t } from 'i18next';
import React from 'react'
import { useState } from 'react';
import Log from './Log';
import Register from './Register';

const Authorize = ({isShow,setIsShow}) => {
  const [isRegister,setIsRegister]=useState(true);
  return (
    <div onClick={()=>setIsShow(false)} className={isShow?"authorize__main active":"authorize__main"}>
      <div onClick={(e)=>e.stopPropagation()} className="modal__content">
        <div className='authorize__header'>
          <h1 className='authorize__name'>{t("authorize.authorize")}</h1>
          <span onClick={()=>setIsShow(false)} className='close'>&times;</span>
        </div>
        <div className='register__or__log'>
          <div onClick={()=>setIsRegister(true)} className={isRegister?"active":""}>
            {t("authorize.register")}
          </div>
          {t("authorize.or")}
          <div onClick={()=>setIsRegister(false)} className={!isRegister?"active":""}>
            {t("authorize.log")}
          </div>
        </div>
        {isRegister?<Register close={setIsShow}/>:<Log close={setIsShow}/>}
      </div>
    </div>
  )
}

export default Authorize
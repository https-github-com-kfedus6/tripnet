import { t } from 'i18next'
import React from 'react'

const Register = () => {
  return (
    <div className="register__main">
      <div className='email'>
        email
        <input placeholder='email'/>
      </div>
      <div className='number__phone'>
        {t("authorize.number_phone")}
        <input placeholder={t("authorize.number_phone")}/>
      </div>
      <div className='password'>
        {t("authorize.password")}
        <input placeholder={t("authorize.password")}/>
      </div>
      <div className="btn__register">
        <button>{t("authorize.register")}</button>
      </div>
    </div>
  )
}

export default Register
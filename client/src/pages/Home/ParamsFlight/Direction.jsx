import { t } from 'i18next'
import React from 'react'
import MyInputStandart from '../../../components/UI/MyInput/MyInputStandart'

const Direction = () => {
  return (
    <div className="direction">
        <div className="whence__input">
            <MyInputStandart placeholder={t("home.whence")}/>
        </div>
        <div className="whither__input">
            <MyInputStandart placeholder={t(t("home.whitherto"))}/>
        </div>
    </div>
  )
}

export default Direction
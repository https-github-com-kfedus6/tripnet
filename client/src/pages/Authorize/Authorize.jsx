import { t } from 'i18next';
import React from 'react'
import { useState } from 'react';
import Log from './Log';
import Register from './Register';

const Authorize = ({ isShow, setIsShow }) => {
    const [isRegister, setIsRegister] = useState(true);
    return (
        <div onClick={() => setIsShow(false)} className={isShow ? "authorize__main active" : "authorize__main"}>
            <div onClick={(e) => e.stopPropagation()} className="modal__content">
                <div className='authorize__header'>
                    <div>
                        <img src={process.env.REACT_APP_API_URL + "logo.png"} alt="logo" />
                    </div>
                </div>
                <div className='register__or__log'>
                    <div onClick={() => setIsRegister(true)} className={isRegister ? "active1" : ""}>
                        <span className={!isRegister ? 'active-span' : ''} >{t("authorize.register")} </span> {t("authorize.or") }
                    </div>
                    <div onClick={() => setIsRegister(false)} className={!isRegister ? "active1" : ""}>
                        <span className={isRegister ? 'active-span' : ''}>{t("authorize.log")}</span>
                    </div>
                </div>
                {isRegister ? <Register close={setIsShow} /> : <Log close={setIsShow} />}
            </div>
        </div>
    )
}

export default Authorize
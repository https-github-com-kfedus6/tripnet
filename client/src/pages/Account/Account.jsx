import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im'
//import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import '../Account/account.css'
import { Breadcrumbs, Typography } from '@mui/material'

const Account = () => {
    const { is_admin, is_login, user, reply } = useSelector(state => state.user)
    const { userHistoty } = useSelector(state => state.order)
    const { flight } = useSelector(state => state.flights)
    const { language } = useSelector(state => state.language)

    const [isActive, setIsActive] = useState(null)
    useEffect(() => {

    }, [])
    useEffect(() => {
        getUserHistory();
    }, [])

    const { SetShowMessgeFalse, SetShowMessgeTrue, getUserHistory, fetchGetFlight,
        EditEmail } = useAction()
    const { t } = useTranslation()

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const { IsAuthorize, ChangePassword } = useAction();
    const [isChangePass, setIsChangePass] = useState("false")

    const [checkPassword, setCheckPassword] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [newEmail, setNewEmail] = useState("");

    const [phoneValue, setPhoneValue] = useState("")


    useEffect(() => {
        if (isChangePass) {
            if (reply == 200) {
                setOldPassword("");
                setNewPassword("");
                setNewPassword2("");
            }
            setIsChangePass(false);
        }
    }, [reply])

    const navigate = useNavigate();

    const exit = () => {
        localStorage.removeItem("token");
        IsAuthorize();
        navigate("/");
    }

    const toggle = (i, id) => {
        if (isActive == i) {
            return setIsActive(null);
        }
        setIsActive(i);
        fetchGetFlight(id);
    }


    return (
        <>
            <div className='bread__crumbs__main'>
                <div className='bredcrumbs-flight'>
                    <span className='bredcrumbs-flight-services-link'><NavLink to="/">{t("header.first_link")}</NavLink></span>
                    <span><img src={process.env.REACT_APP_API_URL + 'chevron-right.png'} alt="right" /></span>
                    <span className='bredcrumbs-flight-text'>{t("account.personal_office")}</span>
                </div>
            </div>
            <div className="user__profile user__profile__left">
                <div className="user__profile__title">
                    {t("account.profile")}
                </div>
                <div className="account__surname__with__name">
                    {user.name + " " + user.surname}
                </div>
                <div className="account__email">
                    {user.email}
                </div>
                <div className="account__setting__profile__button">
                    <button onClick={() => navigate("/account/edit")}>{t("account.setting_profile")}</button>
                </div>
            </div>
            <div className='account__main2'>
                <div className="my__booking__title">
                    {t("account.my_booking")}
                </div>
                <div className="accordion-account">
                    {userHistoty.map((item, i) => {
                        return (
                            <div key={item.id} className="accordion-item-account">
                                <div>
                                    {(Array.isArray(flight)) ?
                                        <button onClick={() => toggle(i, item.flightId)} className={isActive === i ? "accordion-button-account" : ''} aria-expanded={isActive === i ? "true" : "false"}>
                                            <span className="accordion-title-account">
                                                {item.status === null ? <span className='account-processing'>{t("account.in_processing")}</span> : item.status ? <span>{t("account.accepted")}</span> : <span>{t("account.canceled")}</span>}
                                            </span>
                                        </button>
                                        :
                                        <button onClick={() => toggle(i, item.flightId)} className={isActive === i ? "accordion-button-account" : ''} aria-expanded={isActive === i ? "true" : "false"}>
                                            <span className='account-position'>{flight.startPosition[language]}</span>
                                            <span><ImArrowRight2 /></span>
                                            <span className='account-position'>{flight.finishPosition[language]}</span>
                                            <span className="accordion-title-account">
                                                {item.status === null ? <span className='account-processing'>{t("account.in_processing")}</span> : item.status ? <span>{t("account.accepted")}</span> : <span>{t("account.canceled")}</span>}
                                            </span>
                                        </button>
                                    }
                                </div>
                                {(Array.isArray(flight)) ? <></> :
                                    <div className={isActive === i ? 'accordion-content-account show' : 'accordion-content-account'}>
                                        <div className='accordion-street'>
                                            <div>
                                                <span>{flight.streetStartPosition[language]}</span>
                                            </div>
                                            <div>
                                                <span className='accordion-street-finish'>{flight.streetFinishPosition[language]}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span>{flight.startDate}</span>
                                            <span>{flight.finishDate}</span>
                                        </div>
                                        <div>
                                            <span>{flight.startTime}</span>
                                            <span>{flight.timeFlight.split("//")[language]}</span>
                                            <span>{flight.finishTime}</span>
                                        </div>
                                        <div className='account-price-place'>
                                            <span>{item.authorName}</span>
                                            <span>{item.phone}</span>
                                            <span><strong>{t("account.count_tiket")}:</strong> {item.countTicket}</span>
                                            <span><strong>Дата:</strong> {item.date}</span>
                                            <span><strong>{t("account.price")}:</strong> {+flight.price * +item.countTicket} UAH</span>
                                        </div>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
                <div className="account__right">
                    <div className="user__profile user__profile__right">
                        <div className="user__profile__title">
                            {t("account.profile")}
                        </div>
                        <div className="account__surname__with__name">
                            {user.name + " " + user.surname}
                        </div>
                        <div className="account__email">
                            {user.email}
                        </div>
                        <div className="account__setting__profile__button">
                            <button onClick={() => navigate("/account/edit")}>{t("account.setting_profile")}</button>
                        </div>
                    </div>
                    <div className="account__message">
                        <div className='flight-message-icon'>
                            <img src={process.env.REACT_APP_API_URL + 'info-blue.png'} alt='info' />
                        </div>
                        <div className="account__message__title">
                            {t("account.message_title")}
                            <div className="account__message__description">
                                {t("account.message_description")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;
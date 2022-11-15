import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import { useTranslation } from 'react-i18next';

import '../Account/account.css'

const Account = () => {

    const navigate = useNavigate();

    const { t } = useTranslation()

    const { is_admin, is_login, user, reply } = useSelector(state => state.user)
    const { userHistoty } = useSelector(state => state.order)
    const { flight } = useSelector(state => state.flights)

    const { language } = useSelector(state => state.language)
    const [isActive, setIsActive] = useState(null)

    const { SetShowMessgeFalse, SetShowMessgeTrue, getUserHistory, fetchGetFlight,
        EditEmail, IsAuthorize, ChangePassword, fetchGetFlightAccountOrders } = useAction()

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const [isChangePass, setIsChangePass] = useState("false")

    const [checkPassword, setCheckPassword] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [newEmail, setNewEmail] = useState("");

    const [phoneValue, setPhoneValue] = useState("")

    useEffect(() => {
        fetchGetFlightAccountOrders()
    }, [])

    useEffect(() => {
        getUserHistory();
    }, [])

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
    }

    return (
        <div className='container-account'>
            <div className='block-account'>
                <div className='bread__crumbs__main'>
                    <div className='bredcrumbs-flight'>
                        <span className='bredcrumbs-flight-services-link'><NavLink to="/">{t("header.first_link")}</NavLink></span>
                        <span><img src={process.env.REACT_APP_API_URL + 'chevron-right.png'} alt="right" /></span>
                        <span className='bredcrumbs-flight-text'>{t("account.personal_office")}</span>
                    </div>
                </div>
                <div className='account__main'>
                    <div className="my__booking__title">
                        {t("account.my_booking")}
                    </div>
                </div>
                <div className='block-fligth-cart-profile-account'>
                    <div className='block-flight-cart-account'>
                        <div className='flight-cart-account-status'>
                            <img src={process.env.REACT_APP_API_URL + 'clock-pink.png'} alt="time" />
                            <span>В обробці</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="account__right">
                        <div className="user__profile user__profile__right">
                            <div className="user__profile__title">
                                <b>{t("account.profile")}</b>
                                <div className="account__surname__with__name">
                                    <span>{user.name + " " + user.surname}</span>
                                    <span>{user.email}</span>
                                </div>
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
            </div>
        </div>
    )
}

export default Account;
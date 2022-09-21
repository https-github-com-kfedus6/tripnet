import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im'

import '../Account/account.css'

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

    const { SetShowMessgeFalse, SetShowMessgeTrue, getUserHistory, fetchGetFlight } = useAction()
    const { t } = useTranslation()

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const { IsAuthorize, ChangePassword } = useAction();
    const [isChangePass, setIsChangePass] = useState("false")

    const change_password = () => {
        if (newPassword != newPassword2) {
            SetShowMessgeTrue(t("authorize.passwords_do_not_match"));
            setTimeout(() => SetShowMessgeFalse(), 3000);
            return;
        }
        if (newPassword.length < 8) {
            SetShowMessgeTrue(t("authorize.password_must_be_longer_than_8_characters"));
            setTimeout(() => SetShowMessgeFalse(), 3000);
            return;
        }
        setIsChangePass(true);
        ChangePassword(oldPassword, newPassword, user.id);
    }

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
        <div className='container-user'>
            <div className='block-user'>
                <div className='block-user-icon'>
                    <span><FaUserCircle /></span>
                    <span>{t("account.hello")}</span>
                    <span>{user.name}</span>
                </div>
                <div className='block-user-info'>
                    <div>
                        <span>email</span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>{t("account.name")}</span>
                        <span>{user.name}</span>
                    </div>
                </div>
                <div>
                    <div className='block-history'>
                        <details>
                            <summary>
                                {t("account.history_order")}
                            </summary>
                            <div className='account-container'>
                                <div className="container-account">
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
                                                                <span><strong>{t("account.price")}:</strong> {+flight.price * +item.countTicket} UAH</span>
                                                            </div>
                                                        </div>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div >
                        </details>
                    </div>
                </div>
                <div className='block-user-input'>
                    <div>
                        <TextField
                            onChange={e => setOldPassword(e.target.value)}
                            id="outlined-password-input"
                            label={t("account.old_password")}
                            type="password"
                            autoComplete="current-password"
                            value={oldPassword}
                            size="small"
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={e => setNewPassword(e.target.value)}
                            id="outlined-password-input"
                            label={t("account.new_password")}
                            type="password"
                            autoComplete="current-password"
                            value={newPassword}
                            size="small"
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={e => setNewPassword2(e.target.value)}
                            id="outlined-password-input"
                            label={t("account.new_password")}
                            type="password"
                            autoComplete="current-password"
                            value={newPassword2}
                            size="small"
                        />
                    </div>
                    <div>
                        <button onClick={change_password}>{t("account.change_password")}</button>
                    </div>
                </div>
                <div className='block-user-btn'>
                    <button onClick={exit}>{t("account.exit")}</button>
                </div>
            </div>
        </div>
    )
}

export default Account;
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

import '../Account/account.css'

const Account = () => {
    const { is_admin, is_login, user, reply } = useSelector(state => state.user);
    const {userHistoty}=useSelector(state=>state.order);
    useEffect(()=>{
        getUserHistory();
    },[])
    useEffect(()=>{
        console.log(userHistoty);
    },[userHistoty]);
    const { SetShowMessgeFalse, SetShowMessgeTrue, getUserHistory } = useAction()
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
                        <span>Емейл</span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>{t("account.name")}</span>
                        <span>{user.name}</span>
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
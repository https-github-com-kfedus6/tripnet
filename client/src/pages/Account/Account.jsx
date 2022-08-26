import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import '../Account/account.css'

const Account = () => {

<<<<<<< HEAD
    const { user } = useSelector(state => state.user)
=======
    const { is_admin, is_login, user, reply } = useSelector(state => state.user);

    const [oldPassword,setOldPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [newPassword2,setNewPassword2]=useState("");
    const {IsAuthorize,ChangePassword}=useAction();
    const [isChangePass,setIsChangePass]=useState("false")

    const change_password=()=>{
        if(newPassword!=newPassword2){
            alert(t("authorize.passwords_do_not_match"));
            return;
        }
        if(newPassword.length<8){
            alert(t("authorize.password_must_be_longer_than_8_characters"));
            return;
        }
        isChangePass(true);
        ChangePassword(oldPassword,newPassword,user.id);
        
    }

    useEffect(()=>{
        if(isChangePass){
            if(reply==200){
                setOldPassword("");
                setNewPassword("");
                setNewPassword2("");
            }
            setIsChangePass(false);
        }
    },[reply])

    const navigate=useNavigate();

    const exit=()=>{
        localStorage.removeItem("token");
        IsAuthorize();
        navigate("/");
    }

>>>>>>> c3e55bbcbf1d83d574843ba242f7779e2f72f974

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
                <div className='block-user-input'>
                    <input type={"password"} onChange={e=>setOldPassword(e.target.value)} value={oldPassword} placeholder={t("account.old_password")}/>
                    <input type={"password"} onChange={e=>setNewPassword(e.target.value)} value={newPassword} placeholder={t("account.new_password")}/>    
                    <input type={"password"} onChange={e=>setNewPassword2(e.target.value)} value={newPassword2} placeholder={t("account.new_password")}/>  
                    <button onClick={change_password}>{t("account.change_password")}</button>
                </div>
                <div className='block-user-btn'>
                    <button onClick={exit}>{t("account.exit")}</button>
                </div>
            </div>
        </div>
    )
}

export default Account;
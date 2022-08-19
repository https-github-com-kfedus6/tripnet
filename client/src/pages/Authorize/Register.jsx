import { t } from 'i18next'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useSelector} from "react-redux";
import { useAction } from "../../hooks/useAction";

const Register = ({close}) => {
  const {Register}=useAction()
  const [isRegister,setIsRegister]=useState(false);
  const {reply}=useSelector(state=>state.user);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [numberPhone,setNumberPhone]=useState("");
  const [password,setPassword]=useState("");
  const [password2,setPassword2]=useState("");
  useEffect(()=>{
    if(!isRegister)return;
    switch(reply){
      case 200:{
        alert(t("authorize.you_have_successfully_registered"));
        close(false);
      };
      break
      case 411:alert(t("authorize.email_is_busy"));
        break;
      default:alert("error");
        break;
    }
  },[reply]);

  const register=()=>{
    let tempName=name.toLocaleLowerCase();
    let tempPass=password.toLocaleLowerCase();
    const regName=/drop|\(|delete|;/;
    if(tempName.length<3||regName.test(tempName)){
      alert(t("authorize.invalid_name"));
      return;
    }
    const regEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
      alert(t("authorize.mail_must_be_genuine"));
      return;
    }
    const regTelephone=/(^\++\d{11}$)|(^\d{9})$/;
    if(regTelephone.test(numberPhone)){
      alert(t("authorize.invalid_telephone"));
      return;
    }if(password!=password2){
      alert(t("authorize.passwords_do_not_match"));
      return;
    }
    if(regName.test(tempPass)){
      t("authorize.invalid_pass");
      return;
    }
    if(password.length<8){
      alert("authorize.password_must_be_longer_than_8_characters")
      return;
    }
    setIsRegister(true);
    Register(name,email,numberPhone,password);
  }

  return (
      <div className="register__main">
        <div className="user__name">
          {t("authorize.name")}
          <input onChange={(e)=>setName(e.target.value)} placeholder={t("authorize.name")}/>
        </div>
        <div className='email'>
          email
          <input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
        </div>
        <div className='number__phone'>
          {t("authorize.number_phone")}
          <input onChange={(e)=>setNumberPhone(e.target.value)} placeholder={t("authorize.number_phone")}/>
        </div>
        <div className='password'>
          {t("authorize.password")}
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder={t("authorize.password")}/>
        </div>
        <div className='password'>
          {t("authorize.password")}
          <input onChange={(e)=>setPassword2(e.target.value)} type="password" placeholder={t("authorize.password")}/>
        </div>  
        <div className="btn__authorize">
          <button onClick={(e)=>{e.stopPropagation();register()}}>{t("authorize.register")}</button>
        </div>
      </div>
  )
}

export default Register
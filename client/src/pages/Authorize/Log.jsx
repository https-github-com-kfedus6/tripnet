import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';

const Log = ({close}) => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLog,setIsLog]=useState(false);
  const {reply,is_login}=useSelector(state=>state.user);
  const {Authorize}=useAction()
  const log=()=>{
    const regEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPass=/drop|\(|delete|;/;
    if(!regEmail.test(email)){
      alert(t("authorize.mail_must_be_genuine"));
      return;
    }
    if(regPass.test(password)){
      alert(t("authorize.invalid_pass"));
      return;
    }
    if(password.length<8){
      alert(t("authorize.invalid_pass"));
      return;
    }
    setIsLog(true);
    Authorize(email,password);
  }
  useEffect(()=>{
    if(is_login)close(false);
  },[is_login])
  useEffect(()=>{
    if(!isLog)return;
    switch(reply){
      case 200:close(false);
      break;
      case 415:alert(t("authorize.invalid_email"));
      break;
      case 416:alert(t("authorize.invalid_pass"));
      default: alert("error");
    }
  },[reply]);
  return (
    <form>
    <div className="register__main">
      <div className='email'>
        email
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
      </div>
      <div className='password'>
        {t("authorize.password")}
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder={t("authorize.password")}/>
      </div>
      <div className="btn__authorize">
        <button onClick={(e)=>{e.preventDefault();log();return false;}}>{t("authorize.log")}</button>
      </div>
    </div>
    </form>
  )
}

export default Log
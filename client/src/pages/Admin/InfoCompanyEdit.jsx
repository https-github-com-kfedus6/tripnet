import { useSelect } from '@mui/base'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';

const InfoCompanyEdit = () => {
    const {infoCompany}=useSelector(state=>state.infoCompany);
    const {SetInfoCompany}=useAction();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [addressUA,setAddressUA]=useState("");  
    const [addressRU,setAddressRU]=useState("");
    const [telephone,setTelephone]=useState("");
    const [openingHoursUA,setOpeningHoursUA]=useState("");
    const [openingHoursRU,setOpeningHoursRU]=useState("");
    useEffect(()=>{
        if(infoCompany!=undefined){
            setName(infoCompany.name);
            setEmail(infoCompany.email);
            setAddressUA(infoCompany.address[0]);
            setAddressRU(infoCompany.address[1]);
            setTelephone(infoCompany.telephone);
            setOpeningHoursUA(infoCompany.openingHours[0]);
            setOpeningHoursRU(infoCompany.openingHours[1]);
        }
    },[infoCompany])
  return (
    <details>

        <summary className='name__menu'>Інформація про компанію</summary>
        <p>назва</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>email</p>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <p>адреса українською</p>
        <input value={addressUA} onChange={(e)=>setAddressUA(e.target.value)}/>
        <p>адреса російською</p>
        <input value={addressRU} onChange={(e)=>setAddressRU(e.target.value)}/>
        <p>телефон</p>
        <input value={telephone} onChange={(e)=>setTelephone(e.target.value)}/>
        <p>години робити українською</p>
        <input value={openingHoursUA} onChange={(e)=>setOpeningHoursUA(e.target.value)}/>
        <p>години робити російською</p>
        <input value={openingHoursRU} onChange={(e)=>setOpeningHoursRU(e.target.value)}/>
        <br/>
        <button onClick={()=>SetInfoCompany(name,email,telephone,addressUA,
            addressRU,openingHoursUA,openingHoursRU)}>set</button>
    </details>
  )
}

export default InfoCompanyEdit
import { Breadcrumbs, Button, ButtonBase, Input, InputAdornment, Typography } from '@mui/material'
import { t } from 'i18next'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const EditAccount = () => {
    const [isEditContactData,setIsEditContactData]=useState(false);
    const [isEditEmail,setIsEditEmail]=useState(false);
    const [isEditPassword,setIsEditPassword]=useState(false);
    const [surname,setSurname]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("")
  return (
    <>
        <div className='bread__crumbs__main'>
            <Breadcrumbs>
                <NavLink to="/">
                    {t("header.first_link")}
                </NavLink>
                <NavLink to="/blog">
                    {t("account.personal_office")}
                </NavLink>
                <Typography color="text.primary">{t("account.setting_profile")}</Typography>
            </Breadcrumbs>
        </div>
        <div className="edit__account__main">
            <div className="adit__account__title">
                {t("account.my_profile")}
            </div>
            <div className="edit__account__content">
                <div className="contact__data">
                    <div className="edit__account__description__title">
                        {t("account.contact_data")}
                    </div>
                    <div className="text__edit__or__contact__data">
                        {!isEditContactData?
                            <>
                                <div onClick={()=>setIsEditContactData(true)} className='text__edit'>
                                    {t("account.edit")}
                                </div>
                                <div className="edit__account__mini__title">
                                    {t("account.surname")}
                                </div>
                                <div className="edit__account__description">
                                    {surname}
                                </div>
                                <div className="edit__account__mini__title">
                                    {t("account.name")}
                                </div>
                                <div className="edit__account__description">
                                    {name}
                                </div>
                                <div className="edit__account__mini__title">
                                    Телефон
                                </div>
                                <div className="edit__account__description">
                                    {phone}
                                </div>
                            </>
                            :
                            <div className='edit__contact__data'>
                                <div className='input__name__or__surname'>
                                    <TextField
                                        value={surname}
                                        id="demo-helper-text-misaligned-no-helper"
                                        onChange={(e)=>setSurname(e.target.value)}
                                        label={t("account.surname")}/>
                                </div>
                                <br/>
                                <div className='input__name__or__surname'>
                                    <TextField
                                        value={name}
                                        id="demo-helper-text-misaligned-no-helper"
                                        onChange={(e)=>setName(e.target.value)}
                                        label={t("account.name")}/>
                                </div>
                                <br/>
                                <div>
                                    <PhoneInput
                                        international
                                        country="ua"
                                        value={phone}
                                        onChange={e=>setPhone(e)}/>
                                </div>
                                <br/>
                                <div className="buttons__cansel__and__save">
                                    <div className='button__cansel'>
                                        <button onClick={()=>setIsEditContactData(false)}>{t("account.cansel")}</button>
                                    </div>
                                    <div className="button__save">
                                        <button>{t("account.save")}</button>
                                    </div>
                                </div>
                            </div>   
                        }
                        
                    </div>
                </div>
                <div className="setting__accout">
                    <div className="edit__account__description__title">
                        {t("account.setting_profile")}
                    </div>
                </div>
                <div className="edit__account__message">

                </div>
            </div>
        </div>
    </>
  )
}

export default EditAccount
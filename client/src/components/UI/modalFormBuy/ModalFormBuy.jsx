import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import FilledInput from "@mui/material/FilledInput"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTranslation } from 'react-i18next';

import './modalFormBuy.css';
import { useSelector } from 'react-redux';

const ModalFormBuy = ({ visibleBuy, name, setName, phone, setPhone, reserveTicket, setVisiblyBuy, countTicket, setCountTicket, maxTicket }) => {
    const { t } = useTranslation()
    const SetCountTicket=(e)=>{
        if(isNaN(parseInt(e.target.value))&&e.target.value!="")return;
        if((parseInt(e.target.value)<=0||parseInt(e.target.value)>maxTicket)&&e.target.value!="")return;
        setCountTicket(e.target.value)
    }
    const {user,telephone}=useSelector(state=>state.user);
    useEffect(()=>{
        //if(user?.name)
    },[user])
    useEffect(()=>{
        if(telephone!=0){
            setPhone(telephone);
        }
    },[telephone])
    console.log(user);

    if (visibleBuy === false) {
        return (
            <div className='modal-form-buy'>
                <div className='modal-content-form-buy'>
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-form-buy act'>
                <div className='modal-content-form-buy'>
                    <div className='model-block'>
                        <div className="modal-logo">
                            <img src={process.env.REACT_APP_API_URL + 'logo.png'} alt="logo" />
                            <Stack direction="row" spacing={1}>
                                <IconButton size='large' onClick={() => setVisiblyBuy(false)}>
                                    <CloseOutlinedIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                        </div>
                        <h2 className='title-modal'>{t('modalbuy.title')}</h2>
                        <div className='block-modal-input'>
                            <TextField
                                className='input-modal'
                                id="demo-helper-text-misaligned-no-helper"
                                label={t('modalbuy.name')}
                                value={name} onChange={(e) => setName(e.target.value)} />
                            <TextField
                                className='input-modal'
                                id="demo-helper-text-misaligned-no-helper"
                                label={t('modalbuy.phone')}
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <TextField
                                type={"number"}
                                minRows={1}
                                className='input-modal'
                                label={t('modalbuy.ticket')}
                                value={countTicket} 
                                onChange={SetCountTicket}/>
                        </div>
                        <div className='block-modal-btn'>
                            <button onClick={reserveTicket}>{t('modalbuy.btn-buy')}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalFormBuy;
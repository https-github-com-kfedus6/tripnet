import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTranslation } from 'react-i18next';

import './modalFormBuy.css';

const ModalFormBuy = ({ visibleBuy, name, setName, phone, setPhone, reserveTicket, setVisiblyBuy }) => {

    const { t } = useTranslation()

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
                                margin="bense"
                                id="demo-helper-text-misaligned-no-helper"
                                label={t('modalbuy.name')}
                                value={name} onChange={(e) => setName(e.target.value)} />
                            <TextField
                                className='input-modal'
                                margin="normal"
                                id="demo-helper-text-misaligned-no-helper"
                                label={t('modalbuy.phone')}
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
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
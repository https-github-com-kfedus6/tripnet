import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAction } from '../hooks/useAction'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SetLanguage = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value)
    }
    const { setLanguage } = useAction();
    const language = () => {
        const languageLetters = localStorage.getItem('i18nextLng');
        if (languageLetters) {
            return languageLetters
        }
        return 'UA'
    }
    return (
        <>
            <FormControl size="small" >
                <Select
                    value={language()}
                    onChange={(event) => changeLanguage(event)}
                    displayEmpty
                >
                    <MenuItem value='UA'>
                        <img className="icon-lang" src={process.env.REACT_APP_API_URL + 'ukraine.png'} alt="UK" />
                        <a className='title-lang'>{t('lang.uk')}</a>
                    </MenuItem>
                    <MenuItem value='RU'>
                        <img className="icon-lang" src={process.env.REACT_APP_API_URL + 'russia.png'} alt="RU" />
                        <a className='title-lang'>{t('lang.ru')}</a>
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default SetLanguage
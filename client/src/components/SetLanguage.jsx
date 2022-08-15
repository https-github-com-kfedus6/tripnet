import React from 'react'
import { useTranslation } from 'react-i18next'

const SetLanguage = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }
    const language = () => {
        const languageLetters = localStorage.getItem('i18nextLng')
        if (languageLetters) {
            return languageLetters
        }
        return 'UA'
    }
  return (
    <>
        <select className='option-lang' onChange={(event) => changeLanguage(event)}>
            <option className='option' hidden>{language()}</option>
            <option className='option' value='UA'>UA</option>
            <option className='option' value='RU'>RU</option>
        </select>
    </>
  )
}

export default SetLanguage
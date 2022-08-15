import React from 'react';
import { useTranslation } from 'react-i18next';
import MyButtonStandart from '../../../components/UI/MyButton/MyButtonStandart';
import Direction from './Direction';

const ParamsFlight = () => {
  const { t, i18n }=useTranslation();
  return (
    <div className='params__flight'>
        <Direction/>
        <MyButtonStandart>{t("home.search")}</MyButtonStandart>
    </div>
  )
}

export default ParamsFlight
//<MyButton>text</MyButton>
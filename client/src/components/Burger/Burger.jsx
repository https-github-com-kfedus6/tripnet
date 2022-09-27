import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SetLanguage from '../SetLanguage';

const Burger = ({setIsShowRegister}) => {
  const { t, i18n } = useTranslation()
  const [isBurgerClick,setIsBurgerClick]=useState(false);
  const {is_login,user, is_admin}=useSelector(state=>state.user)
  return (
    <>
      <div className={isBurgerClick?"burger__menu actived":"burger__menu"}>  
        <div onClick={() => { setIsBurgerClick(false) }} className='burger__exit__main'>
            &times;
          </div> 
        <div className='burger__menu__list'>
          {is_admin ? 
        <div className='burger__admin__panel'>
          <details onClick={e=>{e.stopPropagation();}}>
            <summary>
              admin panel
            </summary>
            <div>
              <div><NavLink to="/infoCompanyEdit">{t('admin.infoCompany')}</NavLink></div>
              <div><NavLink to="/aboutUsEdit">{t('admin.aboutUs')}</NavLink></div>
              <div><NavLink to="/blogEdit">{t('admin.blog')}</NavLink></div>
              <div><NavLink to="/faqEdit">{t('admin.faq')}</NavLink></div>
              <div><NavLink to="/flightsEdit">{t('admin.flight')}</NavLink></div>
              <div><NavLink to="/novetlyEdit">{t('admin.novetly')}</NavLink></div>
              <div><NavLink to="/responseEdit">{t('admin.response')}</NavLink></div>
              <div><NavLink to="/order">{t('admin.order')}</NavLink></div>
            </div>
            
          </details> 
        </div>: <></>}
        <div className='burger__list'/>

        {is_login ? 
          <div className='burger__component'>
            <NavLink to='/account'><FaUserCircle /> </NavLink>
            <div className='burger__component__account'>{user.name}</div>
          </div> 
          :
          <div onClick={()=>setIsShowRegister(true)} className='burger__component'>
              <div><FaUserCircle /></div>
              <div className='burger__component__account'>{t("header.registering")}</div> 
          </div>
        }
          <div className='burger__component'><NavLink to="/">{t('header.first_link')}</NavLink></div>
          <div className='burger__component'><NavLink to="/flightsCategory">{t('header.third_link')}</NavLink></div>
          <div className='burger__component'><NavLink to="/aboutUs">{t('header.fourth_link')}</NavLink></div>
          <div className='burger__component'><NavLink to="/blog">блог</NavLink></div>
          <div className='burger__set__language'><SetLanguage/></div>
          </div>
        </div>
        <div onClick={()=>{setIsBurgerClick(!isBurgerClick)}}>
          <GiHamburgerMenu fontSize={"50px"}/>
        </div>
    </>
  )
}

export default Burger;
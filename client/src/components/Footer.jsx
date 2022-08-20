import { t } from 'i18next'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';

const Footer = () => {
    const navigate=useNavigate();
    const {infoCompany}=useSelector(state=>state.infoCompany);
    const {blogNovetly}=useSelector(state=>state.blog);
    const {language}=useSelector(state=>state.language);
    const {GetInfoCompany,GetBlogNovetly}=useAction();
    useEffect(()=>{
        if(infoCompany==undefined){
            GetInfoCompany();
        }
        GetBlogNovetly(5);
    },[])
    return (
        infoCompany==undefined?<div>...loading</div>:
        <div className='footer__main'>
            <div className="footer__about__us">
                <div className='footer__about__us__name main' onClick={()=>navigate("/aboutUs")}>
                    {t("header.fourth_link")}
                </div>
                <div >
                    {t("footer.name")}:{infoCompany.name}
                </div>
                <div>
                    email:{infoCompany.email}
                </div>
                <div>
                    {t("footer.phone")}:{infoCompany.telephone}
                </div>
                <div>
                    {t("footer.address")}:{infoCompany.address}
                </div>
                <div>
                    {t("footer.opening_hours")}:{infoCompany.openingHours}
                </div>
            </div>
            <div className='footer__blog'>
                <div onClick={()=>navigate("/blog")} className="footer__blog main">
                    {t("header.five_link")}
                </div>
                
                {blogNovetly.map(x=><div className='footer__blog__article' onClick={()=>navigate("/blog/"+x.id)} key={x.id}>{x.name[language]}</div>)}
            </div>
        </div>
    )
}

export default Footer
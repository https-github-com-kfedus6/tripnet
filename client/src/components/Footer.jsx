import { t } from 'i18next'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useAction } from '../hooks/useAction';

const Footer = () => {
    const navigate = useNavigate();
    const { infoCompany } = useSelector(state => state.infoCompany);
    const { blogNovetly } = useSelector(state => state.blog);
    const { language } = useSelector(state => state.language);
    const { GetInfoCompany, GetBlogNovetly, GetFAQNovetly } = useAction();
    const { FAQNovetly } = useSelector(state => state.FAQ);

    useEffect(() => {
        if (infoCompany == undefined) {
            GetInfoCompany();
        }
        GetBlogNovetly(5);
        if (FAQNovetly == undefined) GetFAQNovetly(5)
    }, [])

    return (
        infoCompany == undefined ? <div>...loading</div> :
            <div className='footer__main'>
                <details>
                    <summary>{t("header.fourth_link")}</summary>
                    <div className="footer__about__us">
                        <div className='footer__about__us__name main' onClick={() => navigate("/aboutUs")}>
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
                            {t("footer.address")}:{infoCompany.address[language]}
                        </div>
                        <div>
                            {t("footer.opening_hours")}:{infoCompany.openingHours}
                        </div>
                    </div>
                </details>
                <div className='footer__list'>
                    <div className="footer__about__us">
                        <div className='footer__about__us__name main' onClick={() => navigate("/aboutUs")}>
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
                            {t("footer.address")}:{infoCompany.address[language]}
                        </div>
                        <div>
                            {t("footer.opening_hours")}:{infoCompany.openingHours[language]}
                        </div>
                    </div>
                </div>
                <div className="footer__list">
                    <div className='footer__blog'>
                        <div onClick={() => navigate("/blog")} className="footer__blog main">
                            {t("header.five_link")}
                        </div>
                        {blogNovetly.map(x => <div className='footer__blog__article' onClick={() => navigate("/blog/" + x.id)} key={x.id}>{x.name[language]}</div>)}
                    </div>
                </div>
                <details>
                    <summary>{t("header.five_link")}</summary>
                    <div className='footer__blog'>
                        <div onClick={() => navigate("/blog")} className="footer__blog main">
                            {t("header.five_link")}
                        </div>
                        {blogNovetly.map(x => <div className='footer__blog__article' onClick={() => navigate("/blog/" + x.id)} key={x.id}>{x.name[language]}</div>)}
                    </div>
                </details>
                <details>
                    <summary>{t("footer.FAQ")}</summary>
                    <div className="footer__FAQ">
                        <div onClick={() => navigate("/FAQ")} className="footer__FAQ main">
                            {t("footer.FAQ")}
                        </div>
                        {FAQNovetly == undefined ? <div>loading...</div> :
                            FAQNovetly.map(x => <div onClick={() => navigate("/FAQ/")} key={x.id}>{x.name[language]}</div>)}
                    </div>
                </details>
                <div className="footer__list">
                    <div className="footer__FAQ">
                        <div onClick={() => navigate("/FAQ")} className="footer__FAQ main">
                            {t("footer.FAQ")}
                        </div>
                        {FAQNovetly == undefined ? <div>loading...</div> :
                            FAQNovetly.map(x => <div onClick={() => navigate("/FAQ/" + x.id)} key={x.id}>{x.name[language]}</div>)}
                    </div>
                </div>
            </div>
    )
}

export default Footer
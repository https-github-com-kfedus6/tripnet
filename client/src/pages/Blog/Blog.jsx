import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from '../../hooks/useAction';
import { t } from 'i18next';
import { Breadcrumbs, Typography } from '@mui/material';
import HomeBlog from '../Home/HomeBlog';
import { FacebookMessengerShareButton, FacebookShareButton, TelegramShareButton, TwitterShareButton,
    ViberShareButton, WhatsappShareButton} from 'react-share';
import { FacebookIcon, FacebookMessengerIcon, TelegramIcon, TwitterIcon, ViberIcon, WhatsappIcon } from 'react-share';

const Blog = () => {
    const { id } = useParams();
    const { name } = useParams();
    const { selectBlog, similarBlog } = useSelector(state => state.blog)
    const { GetBlogDescription, GetSimilarBlog } = useAction();
    const { language } = useSelector(state => state.language);
    const navigate = useNavigate();

    useEffect(() => {
        GetSimilarBlog(id);
    }, [])
    useEffect(() => {
        if (selectBlog == undefined || selectBlog == null || selectBlog.id != id) {
            GetBlogDescription(id);
        }
    }, [id]);
    function createMarkup(text) { return { __html: text }; };
    return (
        (selectBlog == undefined || selectBlog == null || selectBlog.id != id) ? <div>loading...</div> :
            <>
                <div className='bread__crumbs__main'>
                    <Breadcrumbs>
                        <NavLink to="/">
                            {t("header.first_link")}
                        </NavLink>
                        <NavLink to="/blog">
                            блог
                        </NavLink>
                        <Typography color="text.primary">{selectBlog.name[language]}</Typography>
                    </Breadcrumbs>
                </div>
                <br />
                <div className='blog__main__'>
                    <div className='blog__main_'>
                        <img src={process.env.REACT_APP_API_URL + selectBlog.image} />
                        <h1>{selectBlog.name[language]}</h1>
                        <div dangerouslySetInnerHTML={createMarkup(selectBlog.description[language])} className="blog__main">

                        </div>
                        <br />
                        <br />
                        <br />
                        <div className='blog__social__networks'>
                            <FacebookShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <FacebookIcon size={40} />
                            </FacebookShareButton >
                            <FacebookMessengerShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <FacebookMessengerIcon size={40} />
                            </FacebookMessengerShareButton>
                            <TwitterShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <TwitterIcon size={40} />
                            </TwitterShareButton>
                            <TelegramShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <TelegramIcon size={40} />
                            </TelegramShareButton>
                            <WhatsappShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <WhatsappIcon size={40} />
                            </WhatsappShareButton>
                            <ViberShareButton url={process.env.REACT_APP_THIS_URL + "blog/" + name + "/" + selectBlog.id}>
                                <ViberIcon size={40} />
                            </ViberShareButton>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='blog__container'>
                        {similarBlog==undefined?<></>:
                        <div className="list__blog__main">
                            {similarBlog.map(x => <HomeBlog key={x.id} blog={x} />)}
                        </div>}
                    </div>
                </div>
            </>
    )
}

export default Blog
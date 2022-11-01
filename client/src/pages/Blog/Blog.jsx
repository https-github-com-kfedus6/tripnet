import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from '../../hooks/useAction';
import { t } from 'i18next';
import { Breadcrumbs, Typography } from '@mui/material';
import HomeBlog from '../Home/HomeBlog';
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTelegramPlane, FaViber } from 'react-icons/fa'

const Blog = () => {
    const { id } = useParams();
    const { name } = useParams();
    const { selectBlog, similarBlog } = useSelector(state => state.blog)
    const { GetBlogDescription, GetSimilarBlog } = useAction();
    const { language } = useSelector(state => state.language);
    const navigate = useNavigate();

    useEffect(() => {
        GetSimilarBlog(id);
    }, [id])
    useEffect(() => {
        if (selectBlog == undefined || selectBlog == null || selectBlog.id != id) {
            GetBlogDescription(id);
        }
    }, [id]);
    function createMarkup(text) { return { __html: text }; };
    return (
        (selectBlog == undefined || selectBlog == null || selectBlog.id != id) ? <div>loading...</div> :
            <div className='blog__one__main__container'>
                <div>
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
                    <div className='blog__one__container'>
                        <div className='one__blog__main'>

                            <img src={process.env.REACT_APP_API_URL + selectBlog.image} />
                            <div className='blog__date__with__social__netvork'>
                                <div className="mini__blog__date">
                                    <span>{selectBlog.createdAt.slice(0, 10).split("-").map((x,idx)=>{
                                        if(idx==0)return <div className='date__widt__margin' key={idx}>{x}</div>;
                                        if(idx==1)return <div className='date__widt__margin' key={idx}>{t("blog."+x)}</div>;
                                        return <div key={idx}>{x}</div>;
                                    })} 
                                    </span>
                                </div>
                                <div className="blog__social__networks">
                                    <div>
                                        <a target="_blank" href='#'><FaTelegramPlane /></a>
                                    </div>
                                    <div>
                                        <a target="_blank" href='#'><FaViber /></a>
                                    </div>
                                    <div>
                                        <a target="_blank" href="https://m.facebook.com/TripNET.com.ua/"><FaFacebookF /></a>
                                    </div>
                                    <div>
                                        <a target="_blank" href='https://www.instagram.com/tripnet.com.ua/'><BsInstagram /></a>
                                    </div>
                                </div>
                            </div>
                            <h1>{selectBlog.name[language]}</h1>
                            <div dangerouslySetInnerHTML={createMarkup(selectBlog.description[language])} className="blog__main"/>
                        </div>
                    </div>
                    <div className='blog__container'>
                        {similarBlog == undefined ? <></> :
                            <div className="list__blog__main">
                                {similarBlog.map(x => <HomeBlog key={x.id} blog={x} />)}
                            </div>}
                    </div>
                </div>
                <div className='blog__fixes__panel fixed'>
                    fdsfd
                </div>
            </div>

    )
}

export default Blog
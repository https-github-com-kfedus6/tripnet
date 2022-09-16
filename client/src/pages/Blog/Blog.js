import React from 'react'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useAction } from '../../hooks/useAction';
import { useEffect } from 'react';
import { useState } from 'react';
import { t } from 'i18next';
import { Breadcrumbs, Typography } from '@mui/material';
import HomeBlog from '../Home/HomeBlog';
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount
} from "react-share";import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

const Blog = () => {
  const {id}=useParams();
  const {name}=useParams();
  const {selectBlog,blogNovetly}=useSelector(state=>state.blog)
  const {GetBlogDescription,GetBlogNovetly}=useAction();
  const {language}=useSelector(state=>state.language);
  const navigate=useNavigate();
  
  useEffect(()=>{
    GetBlogNovetly(6);
  },[])
  useEffect(()=>{
    if(selectBlog==undefined||selectBlog==null||selectBlog.id!=id){
      GetBlogDescription(id);
    }
  },[id]);
  
  function createMarkup(text) { return {__html: text}; };
  return (
    (selectBlog==undefined||selectBlog==null||selectBlog.id!=id)?<div>loading...</div>:
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
      <br/>
      <div className='blog__main__'>
        <div className='blog__main_'>
          <img src={process.env.REACT_APP_API_URL+selectBlog.image}/>
          <h1>{selectBlog.name[language]}</h1>
          <div dangerouslySetInnerHTML={createMarkup(selectBlog.description[language])} className="blog__main">
            
          </div>
          <br/>
          <br/>
          <br/>
          <div className='blog__social__networks'>
            <FacebookShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <FacebookIcon size={50}/>
            </FacebookShareButton >
            <FacebookMessengerShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <FacebookMessengerIcon size={50}/>
            </FacebookMessengerShareButton>
            <TwitterShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <TwitterIcon size={50}/>
            </TwitterShareButton>
            <TelegramShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <TelegramIcon size={50}/>
            </TelegramShareButton>
            <WhatsappShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <WhatsappIcon size={50}/>
            </WhatsappShareButton>
            <ViberShareButton url={process.env.REACT_APP_THIS_URL+"blog/"+name+"/"+selectBlog.id}>
              <ViberIcon size={50}/>
            </ViberShareButton>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='home__blog__container'>
            <div className="home__list__blog">
                {blogNovetly.map(x=><HomeBlog key={x.id} blog={x}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
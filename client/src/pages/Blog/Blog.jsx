import React from 'react'
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useAction } from '../../hooks/useAction';
import { useEffect } from 'react';
import { useState } from 'react';
import { t } from 'i18next';
import { Breadcrumbs, Typography } from '@mui/material';

const Blog = () => {
  const {id}=useParams();
  const {selectBlog}=useSelector(state=>state.blog)
  const {GetBlogDescription}=useAction();
  const {language}=useSelector(state=>state.language);
  const navigate=useNavigate();
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
        </div>
      </div>
    </>
  )
}

export default Blog
import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useAction } from '../../hooks/useAction';
import { useEffect } from 'react';
import { useState } from 'react';

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
  console.log(selectBlog);
  return (
    (selectBlog==undefined||selectBlog==null||selectBlog.id!=id)?<div>loading...</div>:
    <div className='blog__main__'>
      <div className='blog__main_'>
        <img width={"30%"} src={process.env.REACT_APP_API_URL+selectBlog.image}/>
        <h1>{selectBlog.name[language]}</h1>
        <div dangerouslySetInnerHTML={createMarkup(selectBlog.description[language])} className="blog__main">
          
        </div>
      </div>
    </div>
  )
}

export default Blog
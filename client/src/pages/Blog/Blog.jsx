import React from 'react'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useAction } from '../../hooks/useAction';
import { useEffect } from 'react';

const Blog = () => {
  const {id}=useParams()
  const {selectBlog}=useSelector(state=>state.blog)
  const {GetBlogDescription}=useAction();
  const {language}=useSelector(state=>state.language)
  useEffect(()=>{
    if(selectBlog==undefined||selectBlog.id!=id)GetBlogDescription(id);
  },[id]);
  function createMarkup(text) { return {__html: text}; };
  return (
    (selectBlog==undefined||selectBlog.id!=id)?<div>loading...</div>:
    <>
      <h1>{selectBlog.name[language]}</h1>
      <div dangerouslySetInnerHTML={createMarkup(selectBlog.description[language])} className="blog__main">
        
      </div>
    </>
  )
}

export default Blog
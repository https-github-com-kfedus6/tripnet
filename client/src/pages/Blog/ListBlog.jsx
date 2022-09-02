import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction';

export const ListBlog = () => {
    const {listBlog,limit,count,page}=useSelector(state=>state.blog);
    const {GetBlogAll}=useAction();
    const {language}=useSelector(state=>state.language);
    
    useEffect(()=>{
        GetBlogAll(page,limit);
    },[page]);
  return (
    listBlog==undefined?<>loading...</>:
    <div className='list__blog__main'>
      {listBlog.map(x=>
        <div className='mini__blog__main' key={x.id}>
          <div className='mini__blog__img'>
            <img src={process.env.REACT_APP_API_URL+x.image}/>
          </div>
          <div className='mini__blog__name'>
            {x.name[language]}
          </div>
        </div>)}
        
    </div>
  )
}

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction';

export const ListBlog = () => {
    const [page,setPage]=useState(1);
    const {listBlog,limit}=useSelector(state=>state.blog);
    const {GetBlogAll}=useAction();
    const {language}=useSelector(state=>state.language);
    
    useEffect(()=>{
        GetBlogAll(page,limit);
    },[page]);
  return (
    listBlog==undefined?<>loading...</>:
    <div>{listBlog.map(x=><div key={x.id}>{x.name[language]}</div>)}</div>
  )
}

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { getPageCount } from '../../utils/page';

export const ListBlog = () => {
    const {listBlog,limit,countBlog,page}=useSelector(state=>state.blog);
    const {GetBlogAll, DelBlog}=useAction();
    const {is_admin}=useSelector(state=>state.user);
    const {language}=useSelector(state=>state.language);
    const navigate=useNavigate();
    const [totalCount, setTotalCount] = useState(undefined);
    const [selectPage,setSelectPage]=useState(1);
    
    useEffect(() => {
      setTotalCount(getPageCount(countBlog, limit))
  }, [listBlog])
    const handleChange = (event, value) => {
        setSelectPage(value);
    }
    useEffect(()=>{
        GetBlogAll(selectPage,limit);
    },[selectPage]);
  return (
    listBlog==undefined?<>loading...</>:
    <>
      <div className='list__blog__main'>
        {listBlog.map(x=>
          <div onClick={()=>navigate("/blog/"+x.id)} className='mini__blog__main' key={x.id}>
            <div className='mini__blog__img'>
              <img src={process.env.REACT_APP_API_URL+x.image}/>
            </div>
            <div className='mini__blog__name'>
              {x.name[language]}
            </div>
            {is_admin?<button onClick={(e)=>{e.stopPropagation();DelBlog(x.id);GetBlogAll(setSelectPage,limit)}}>del</button>:<></>}
        </div>)}
      </div>
      {totalCount==undefined?<></>:
        <div className='pagination'>
            <Stack spacing={10}>
                <Pagination count={totalCount} page={page} onChange={handleChange} />
            </Stack>
        </div>
      }
    </>
  )
}

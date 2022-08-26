import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

const HomeBlog = ({blog}) => {
    const {is_admin}=useSelector(state=>state.user);
    const navigate=useNavigate();
    const {DelBlog}=useAction();
    const {language}=useSelector(state=>state.language);
    return (
    <div onClick={()=>{navigate("/blog/"+blog.id)}} className="home__blog__main">
        <img src={process.env.REACT_APP_API_URL+blog.image}/>
        <div className="home__blog__description">
            {blog.name[language]}
        </div>
        {is_admin?<button onClick={(e)=>{e.stopPropagation();DelBlog(blog.id)}}>del</button>:<></>}
    </div>
  )
}

export default HomeBlog
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

const HomeBlog = ({ blog }) => {
    const navigate = useNavigate();
    const { language } = useSelector(state => state.language);
    return (
        <div onClick={() => { navigate("/blog/" + blog.name + "/" + blog.id) }} className="mini__blog__main">
            <div className='mini__blog__img'>
                <img src={process.env.REACT_APP_API_URL + blog.image} />
            </div>
            <div className='mini__blog__name'>
                {blog.name[language]}
            </div>
            <div className="mini__blog__date">
                {blog.createdAt.slice(0, 10)}
            </div>
            <div className='mini__blog__description'>
                {blog.miniDescription[language]}
            </div>

        </div>
    )
}

export default HomeBlog
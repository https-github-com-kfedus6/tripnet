import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { ImArrowRight2 } from 'react-icons/im'
import { t } from 'i18next';

const HomeBlog = ({ blog }) => {
    const navigate = useNavigate();
    const { language } = useSelector(state => state.language);

    return (
        <div className='mini__blog__main'>
            <div className='mini__blog__img'>
                <img src={process.env.REACT_APP_API_URL + blog.image} />
            </div>
            <div className='mini-block-info'>
                <div>
                    <div className="mini__blog__date">
                        <span>{blog.createdAt.slice(0, 10)}</span>
                    </div>
                    <div className='mini__blog__name'>
                        <span>{blog.name[language]}</span>
                    </div>
                    <div className='mini__blog__description'>
                        <span>{blog.miniDescription[language]}</span>
                    </div>
                </div>
                <div className='mini-blog-details'>
                    <a onClick={() => navigate("/blog/" + blog.name[language] + "/" + blog.id)}>
                        {t('blog.details')} <ImArrowRight2 />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
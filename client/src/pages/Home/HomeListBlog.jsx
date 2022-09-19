import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import HomeBlog from './HomeBlog';

const HomeListBlog = () => {
    const { blogNovetly } = useSelector(state => state.blog);
    const { GetBlogNovetly } = useAction();
    useEffect(() => {
        GetBlogNovetly(6);
    }, [])
    return (
        <div>
            <div className='section-home-title'>
                <p className='home__title'>
                    <span>
                        Блог
                    </span>
                </p>
            </div>
            <div className='home__blog__container'>
                <div className="home__list__blog">
                    {blogNovetly.map(x => <HomeBlog key={x.id} blog={x} />)}
                </div>
            </div>
        </div>
    )
}

export default HomeListBlog
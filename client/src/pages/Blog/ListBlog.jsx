import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { getPageCount } from '../../utils/page';
import { Breadcrumbs, Typography } from '@mui/material';
import { t } from 'i18next';

export const ListBlog = () => {
    const { listBlog, limit, countBlog, page } = useSelector(state => state.blog);
    const { GetBlogAll, DelBlog } = useAction();
    const { is_admin } = useSelector(state => state.user);
    const { language } = useSelector(state => state.language);
    const navigate = useNavigate();
    const [totalCount, setTotalCount] = useState(undefined);
    const [selectPage, setSelectPage] = useState(1);

    useEffect(() => {
        setTotalCount(getPageCount(countBlog, limit))
    }, [listBlog])
    const handleChange = (event, value) => {
        setSelectPage(value);
    }
    useEffect(() => {
        GetBlogAll(selectPage, limit);
    }, [selectPage]);
    /*let a="fd";
    a.slice(8)*/
    return (
        listBlog == undefined ? <>loading...</> :
            <>
                <div className='bread__crumbs__main'>
                    <Breadcrumbs>
                        <NavLink to="/">
                            {t("header.first_link")}
                        </NavLink>
                        <Typography color="text.primary">блог</Typography>
                    </Breadcrumbs>
                </div>
                <p className='home__title'>Блог</p>
                <div className='blog__container'>
                    <div className='list__blog__main'>
                        {listBlog.map(x =>
                            <div onClick={() => navigate("/blog/" + x.name[language] + "/" + x.id)} className='mini__blog__main' key={x.id}>
                                <div className='mini__blog__img'>
                                    <img src={process.env.REACT_APP_API_URL + x.image} />
                                </div>
                                <div className="mini__blog__date">
                                    {x.createdAt.slice(0, 10)}
                                </div>
                                <div className='mini__blog__name'>
                                    {x.name[language]}
                                </div>
                                <div className='mini__blog__description'>
                                    {x.miniDescription[language]}
                                </div>
                                {is_admin ? <button onClick={(e) => { e.stopPropagation(); DelBlog(x.id); GetBlogAll(setSelectPage, limit) }}>del</button> : <></>}
                            </div>)}
                    </div>
                    {totalCount == undefined ? <></> :
                        <div className='pagination'>
                            <Stack spacing={1}>
                                <Pagination count={totalCount} page={page} onChange={handleChange} />
                            </Stack>
                        </div>
                    }
                </div>
            </>
    )
}

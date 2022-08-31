import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'

import './faq.css';

const FAQ = () => {
    const { id } = useParams();

    const { selectFAQ } = useSelector(state => state.FAQ)

    const { GetFAQSelect } = useAction();

    const navigate = useNavigate();

    const { language } = useSelector(state => state.language);

    useEffect(() => {
        if (selectFAQ == undefined || selectFAQ == null || selectFAQ.id != id) {
            GetFAQSelect(id);
        }
    }, [id]);
    function createMarkup(text) { return { __html: text }; };
    return (
        (selectFAQ == undefined || selectFAQ == null || selectFAQ.id != id) ? <div>loading...</div> :
            <>
                <h1 className='FAQ__name'>{selectFAQ.name[language]}</h1>
                <div dangerouslySetInnerHTML={createMarkup(selectFAQ.description[language])} className="FAQ__main" />
            </>
    )
}

export default FAQ
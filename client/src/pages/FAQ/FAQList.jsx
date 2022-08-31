import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

const FAQList = () => {
    const { FAQList, page, limit, countFAQ } = useSelector(state => state.FAQ);

    const { GetFAQ } = useAction();
    const navigate = useNavigate();

    useEffect(() => {
        GetFAQ(page, limit);
    }, [page])

    return (
        FAQList == undefined ? <div>loading...</div> :
            <div className="FAQ__list__main">
                {FAQList.map(x => <div key={x.id} onClick={() => navigate("/FAQ/" + x.id)}>{x.name}</div>)}
            </div>
    )
}

export default FAQList
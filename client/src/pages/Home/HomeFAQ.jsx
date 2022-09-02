import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { useAction } from '../../hooks/useAction';
import '../FAQ/faq.css'

const HomeFAQ = () => {
    const { FAQList, page, limit } = useSelector(state => state.FAQ);
    const { is_admin } = useSelector(state => state.user);
    const { GetFAQ, deleteFAQ } = useAction();

    useEffect(() => {
        GetFAQ(page, limit);
    }, [page])

    const { language } = useSelector(state => state.language);

    function createMarkup(text) { return { __html: text }; };

    const [isActive, setIsActive] = useState(null);

    const toggle = (i) => {
        if (isActive == i) {
            return setIsActive(null)
        }
        setIsActive(i)
    }

    const deleteFaq = (id) => {
        deleteFAQ(id)
    }
    if (FAQList === undefined) {
        return (
            <div>loading</div>
        )
    } else {
    return (
        <>
            <div className='accordion-title'>
                <h2>Питання та відповіді</h2>
            </div>
            <div className="accordion">
                {FAQList.map((item, i) => {
                    return (
                        <div key={item.id} className="accordion-item">
                            <button onClick={() => toggle(i)} className={isActive === i ? "accordion-button" : ''} aria-expanded={isActive === i ? "true" : "false"}><span className="accordion-title">{item.name[language]}?</span><span className='icon' aria-hidden="true">{isActive === i ? <AiOutlineMinus /> : <AiOutlinePlus />}</span></button>
                            <div className={isActive === i ? 'accordion-content show' : 'accordion-content'}>
                                {is_admin ? <button onClick={() => deleteFaq(item.id)}><AiFillDelete /></button> : <></>}
                                <p dangerouslySetInnerHTML={createMarkup(item.description[language])} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
        )
    }
}
export default HomeFAQ;
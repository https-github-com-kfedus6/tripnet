import { t } from 'i18next'
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';
import { Pagination, Navigation } from "swiper";
import { FaUserCircle } from 'react-icons/fa';
const Responce = () => {
    const { GetResponceNovetly, DelResponce } = useAction()
    const { novetlyResponce } = useSelector(state => state.responce);
    const { is_admin } = useSelector(state => state.user);
    useEffect(() => {
        GetResponceNovetly();
    }, [])
    
    return (
        novetlyResponce == undefined ? <div>loading...</div> : novetlyResponce.length == 0 ? <></> :
            <div className='responce__main'>
                <div className="responce__container">
                    <h1>{t("home.responce")}</h1>
                    <div className="list__responce">
                        {novetlyResponce.map(x=>
                            <div key={x.id} className='responce'>
                                <div className="responce__content">
                                    <div className="img__with__name__and__where__to__where">
                                        <div className="responce__img">
                                            <img src={process.env.REACT_APP_API_URL+x.imageAuthor}/>
                                        </div>
                                        <div className="name__with__where__to__where">
                                            <div className="name__author">
                                                {x.nameAuthor}
                                            </div>
                                            <div className="where_to__where">
                                                {x.wheretoWhere}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="responce__description">
                                        {x.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default Responce
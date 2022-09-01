import { t } from 'i18next'
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Responce = () => {
    const { GetResponceNovetly } = useAction()
    const { novetlyResponce } = useSelector(state => state.responce);

    useEffect(() => {
        GetResponceNovetly();
    }, [])
    
    return (
        novetlyResponce == undefined ? <div>loading...</div> :novetlyResponce.length==0?<></>:
        <>
          <h3 className='home__benefits__company__name'>{t("home.responce")}</h3>
          <div className='list__responce__home__main'>
          <>
          <Swiper navigation={false} modules={[Pagination]} pagination={true} className="my-swiper">
            {novetlyResponce.map(x=>
              <SwiperSlide className='responce__home__main' key={x.id}>
                {x.nameAuthor}<br/><br/>
                {x.description}
                <br/>
                <br/>
              </SwiperSlide>)}

            </Swiper>
          </>
          </div>
        </>
    )
}

export default Responce
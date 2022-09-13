import { t } from 'i18next'
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { FaUserCircle } from 'react-icons/fa';
const Responce = () => {
    const { GetResponceNovetly, DelResponce} = useAction()
    const { novetlyResponce } = useSelector(state => state.responce);
    const { is_admin }=useSelector(state=>state.user); 
    useEffect(() => {
        GetResponceNovetly();
    }, [])

    return (
        novetlyResponce == undefined ? <div>loading...</div> :novetlyResponce.length==0?<></>:
        <>
          <p className='home__title'>{t("home.responce")}</p>
          <div className='list__responce__home__main'>
          <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="my-swiper">

            {novetlyResponce.map(x=>
              <SwiperSlide style={{"display":"flex","justifyContent":"center","alignItems":"center"}} key={x.id}>
              
                <div className='responce__home__main'>
                  <div className='responce__home__user__icon'><FaUserCircle/></div>
                  <div className='responce__home__author__with__description'>
                    <div>
                      <div className='responce__home__name__author'>
                        {x.nameAuthor}
                      </div>
                      <div className='responce__home__description'>
                        {x.description}
                      </div>
                    </div>
                  </div>
                </div>
                {is_admin ?<button onClick={()=>DelResponce(x.id)}>del</button>:<></>}
                
              </SwiperSlide>)}

            </Swiper>
          </>
          </div>
        </>
    )
}

export default Responce
import { t } from 'i18next'
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Responce = () => {
    const { GetResponceNovetly } = useAction()
    const { novetlyResponce } = useSelector(state => state.responce);

    useEffect(() => {
        GetResponceNovetly();
    }, [])

    console.log(novetlyResponce);
    return (
        novetlyResponce == undefined ? <div>loading...</div> :
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </>
            /*<div className="list__responce__main">
                <div className="responce__main">
                    <div className='responce__name'>
                        {t("home.responce")}
                    </div>
                    <div className='responce__name__author__and__description'>

                        <h5 className="responce__name__author">
                            {/*  {novetlyResponce[0].nameAuthor} }
                        </h5>
                        <div className='responce__description'>
                            {/* {novetlyResponce[0].description} }
                        </div>
                    </div>

                </div>
                <div className='responce__pagination'></div>


            </div>*/
    )
}

export default Responce
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
    /*
    return(
      <>

      </>
    )
    console.log(novetlyResponce);
    */
    return (
        novetlyResponce == undefined ? <div>loading...</div> :
        <>
          <h3 className='home__benefits__company__name'>{t("home.responce")}</h3>
          <div className='list__responce__home__main'>
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
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
          </div>
        </>
    )
}

export default Responce
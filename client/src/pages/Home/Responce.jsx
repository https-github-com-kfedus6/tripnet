import { t } from 'i18next'
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

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
          <h3 className='home__benefits__company__name'>{t("home.responce")}</h3>
          <div className='list__responce__home__main'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide className='responce__home__main'>Slide 1gdfg9idfgidfuogidfujgoidfjugdfdfgpodfidpfig\d
              fgdf[gidfg[dfigdfgdfg]]gfdglorem
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum doloremque in itaque fugiat quisquam excepturi consectetur velit distinctio! Delectus illum porro necessitatibus odit repudiandae modi iusto perspiciatis fuga veritatis dolorum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem beatae porro qui libero consequuntur suscipit nobis voluptate cum harum. Porro expedita, ullam velit doloribus aliquid eos similique laudantium pariatur eaque?
              lorem*60
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </>
    )
}

export default Responce
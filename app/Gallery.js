"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./main.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';



const Gallery = () => {
  return (
    <>
    <div className='gallery-area'> 
    <div className='gallery-heading'> Gallery </div>
    <Swiper className='gallery-swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      speed={1200}
      slidesPerView={2}
      loop='true'
      autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src="/gallery1.jpg" className='gallery-image' alt="Gallery Image" width={600} height={395} /></SwiperSlide>
      <SwiperSlide><Image src="/gallery2.jpg" className='gallery-image' alt="Gallery Image" width={600} height={395} /></SwiperSlide>
      <SwiperSlide><Image src="/gallery3.jpg" className='gallery-image' alt="Gallery Image" width={600} height={395} /></SwiperSlide>
      <SwiperSlide><Image src="/gallery4.jpg" className='gallery-image' alt="Gallery Image" width={600} height={395} /></SwiperSlide>
    </Swiper>
      
    </div>
    </>
  )
}

export default Gallery
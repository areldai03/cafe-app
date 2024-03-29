// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
// import { Pagination } from 'swiper/modules';

const Slider = ()=>{
    return (
        <>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,

          },
          // when window width is >= 480px
          760: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{delay:2}}
        speed={3000} 
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src="cafe.jpg" alt="cafe" /></SwiperSlide>
      <SwiperSlide><img src="coffee-cup.jpg" alt="cofee-beans" /></SwiperSlide>
      <SwiperSlide><img src="coffee.jpg" alt="coffee" /></SwiperSlide>
      <SwiperSlide><img src="latte-art.jpg" alt="latte-art" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider

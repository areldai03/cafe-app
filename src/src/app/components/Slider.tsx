// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Slider = ()=>{
    return (
        <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="cafe.jpg" alt="cafe" /></SwiperSlide>
      <SwiperSlide><img src="cofee-beans.jpg" alt="cofee-beans" /></SwiperSlide>
      <SwiperSlide><img src="coffee.jpg" alt="coffee" /></SwiperSlide>
      <SwiperSlide><img src="latte-art.jpg" alt="latte-art" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider

import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.jpg"
// Import Swiper styles
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function Carousel() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className='max-h-80 min-h-80 w-full object-fill' src={slide1}/></SwiperSlide>
      <SwiperSlide><img className='max-h-80 min-h-80 w-full object-fill' src={slide3}/></SwiperSlide>
      <SwiperSlide><img className='max-h-80 min-h-80 w-full object-fill' src={slide4}/></SwiperSlide>
      <SwiperSlide><img className='max-h-80 min-h-80 w-full object-fill' src={slide2}/></SwiperSlide>
      ...
    </Swiper>
  );
};
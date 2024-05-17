import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, Ally} from 'swiper'

// Import Swiper styles
import 'swiper/css';

export const Slider = (slides) => {
    return(
<Swiper
modules ={[]}
      spaceBetween={8}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    )
    
}
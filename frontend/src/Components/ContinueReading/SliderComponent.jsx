import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReadingCards from '../ContinueReadingCard/ReadingCards';

function SliderComponent() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>
    </Swiper>
  );
}
export default SliderComponent;

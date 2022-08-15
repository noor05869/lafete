import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
function Slider() {
  SwiperCore.use([Autoplay]);
  // SwiperCore.use([EffectFade]);
  return (
    <Swiper
      effect={"fade"}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      speed={"3000"}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className="img"
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img"
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-5.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-6.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-7.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-8.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          height="400"
          width="1200"
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

// Import Swiper styles

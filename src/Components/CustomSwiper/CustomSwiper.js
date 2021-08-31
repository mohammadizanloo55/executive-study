import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Lazy, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay, Lazy]);
const CustomSwiper = ({ SlidesPerView, Style, Slides }) => (
  <Swiper
    loop={true}
    preloadImages={false}
    lazy={true}
    autoplay={{
      delay: 800,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    }}
    onMouseOut={() => console.log("da")}
    spaceBetween={50}
    slidesPerView={SlidesPerView}
    style={Style}
    pagination={true}
  >
    {Slides.map((Slide, Index) => (
      // eslint-disable-next-line react/no-array-index-key
      <SwiperSlide key={Index}>{Slide()}</SwiperSlide>
    ))}
  </Swiper>
);
export default CustomSwiper;

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Lazy, Pagination } from "swiper";
import { Swiper } from "swiper/react";

SwiperCore.use([Pagination, Autoplay, Lazy]);
const CustomSwiper = ({ SlidesPerView, Style, ...props }) => (
  <Swiper
    loop={true}
    preloadImages={false}
    lazy={true}
    autoplay={{
      delay: 1500,
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
    {props.children}
  </Swiper>
);
export default CustomSwiper;

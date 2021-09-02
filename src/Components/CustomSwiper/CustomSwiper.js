import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";

import { useBreakpointValue } from "@chakra-ui/react";
import SwiperCore, { Autoplay, Lazy, Pagination } from "swiper";
import { Swiper } from "swiper/react";

SwiperCore.use([Pagination, Autoplay, Lazy]);
const CustomSwiper = ({ SlidesPerView, Style, ...props }) => {
  const ResponsiveSlidesPerView = useBreakpointValue(SlidesPerView);
  if (!ResponsiveSlidesPerView) {
    return null;
  }
  return (
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
      spaceBetween={50}
      slidesPerView={ResponsiveSlidesPerView}
      style={Style}
      pagination={{
        clickable: true,
      }}
    >
      {props.children}
    </Swiper>
  );
};
export default CustomSwiper;

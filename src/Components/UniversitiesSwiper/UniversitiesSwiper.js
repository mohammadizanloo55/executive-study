import { Box, Center, Image, Text } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { SwiperSlide } from "swiper/react";

import University1 from "./University1.png";
import University2 from "./University2.png";
import University3 from "./University3.png";
import University4 from "./University4.png";

const CustomSwiper = lazy(() => import("../CustomSwiper/CustomSwiper"));

const UniversityIcons = [University1, University2, University3, University4];

const LogoSwiper = () => (
  <CustomSwiper
    Style={{
      paddingBottom: "4rem",
    }}
    SlidesPerView={[1, 2, 3, 4]}
  >
    {UniversityIcons.map((IconSrc) => (
      <SwiperSlide key={IconSrc}>
        <Center justifyContent="center">
          <Image src={IconSrc} />
        </Center>
      </SwiperSlide>
    ))}
  </CustomSwiper>
);
const UniversitiesSwiper = () => {
  return (
    <Suspense fallback={null}>
      <Box mt="20" px="5">
        <Text
          mb="10"
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          fontWeight="bold"
          color="#373737"
          opacity="0.7"
          textAlign="center"
        >
          چه کسانی از سرویس های ما استفاده میکنند؟
        </Text>
        <LogoSwiper />
      </Box>
    </Suspense>
  );
};
export default UniversitiesSwiper;

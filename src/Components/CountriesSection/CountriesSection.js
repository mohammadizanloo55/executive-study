import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

import CustomSwiper from "../CustomSwiper/CustomSwiper";
import Titles from "../Titles/Titles";
import CardImage1 from "./CardImage1.jpg";
import CardImage2 from "./CardImage2.jpg";
import CardImage3 from "./CardImage3.jpg";

const CardImages = [CardImage1, CardImage2, CardImage3];
const CardsSwiper = () => (
  <CustomSwiper
    SlidesPerView={[1, 2, 3]}
    Style={{
      paddingBottom: "4rem",
    }}
  >
    {CardImages.map((CardImage) => (
      <SwiperSlide key={CardImage}>
        <Flex flexDir="column">
          <Image
            src={CardImage}
            height="200px"
            objectFit="cover"
            rounded="3xl"
          />
          <Text my="4" fontSize="xl" color="#37474F">
            لورم ایپسوم متن ساختگی
          </Text>
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون
          </Text>
        </Flex>
      </SwiperSlide>
    ))}
  </CustomSwiper>
);
const CountriesSection = () => (
  <>
    <Center mb="10" flexDir="column" mt="20">
      <Titles
        TitleText="کشور هایی که ساپورت میکنیم"
        SubTitleText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
      />
    </Center>

    <CardsSwiper />
  </>
);
export default CountriesSection;

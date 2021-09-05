import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { SwiperSlide } from "swiper/react";

import CustomSwiper from "../CustomSwiper/CustomSwiper";
import Titles from "../Titles/Titles";
import AvatarImage from "./Avatar.jpeg";

const CardsSwiper = () => (
  <CustomSwiper
    SlidesPerView={{
      base: 1,
      sm: 1.3,
      lg: 2.3,
    }}
    Style={{
      paddingBottom: "4rem",
    }}
  >
    {[1, 2, 3].map((Item) => (
      <SwiperSlide key={Item}>
        <Box
          my="3"
          maxW="md"
          p={{
            base: "2",
            sm: "5",
          }}
          rounded="xl"
          shadow="xl"
        >
          <Flex my="3">
            <LazyLoad>
              <Image w="16" rounded="2xl" fallbackSrc={AvatarImage} />
            </LazyLoad>
            <Grid alignItems="center" mr="4">
              <Text fontSize="xl"> لورم ایپسوم </Text>
              <Text color="#37474F"> لورم ایپسوم </Text>
            </Grid>
          </Flex>

          <Text gridColumn="1/3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای درصد گذشته، حال و آینده شناخت فراوان جامعه
          </Text>
        </Box>
      </SwiperSlide>
    ))}
  </CustomSwiper>
);
const TestimonialSection = () => (
  <>
    <Center flexDir="column" mt="20">
      <Titles
        TitleText="نظر افراد"
        SubTitleText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده"
      />
    </Center>

    <CardsSwiper />
  </>
);
export default TestimonialSection;

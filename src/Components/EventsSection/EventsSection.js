import { Center, Flex, Icon, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { SwiperSlide } from "swiper/react";

import CustomSwiper from "../CustomSwiper/CustomSwiper";
import ForwardLink from "../ForwardLink/ForwardLink";
import Titles from "../Titles/Titles";

const CardSwiper = () => (
  <CustomSwiper
    SlidesPerView={[1, 1, 1, 2]}
    Style={{
      paddingBottom: "4rem",
    }}
  >
    {[1, 2, 3, 4].map((Item) => (
      <SwiperSlide key={Item}>
        <Flex
          mt="3"
          flexDir="column"
          px={{
            base: "4",
            md: "8",
          }}
          shadow="xl"
          w="100%"
        >
          <Flex
            mt="7"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
            w="100%"
            mb="5"
          >
            <Center
              flexDir="column"
              overflow="hidden"
              bg="#EBEDFF"
              width="80px"
              rounded="2xl"
              height="80px"
              color="#717CFF"
            >
              <Text fontSize="2xl" fontWeight="bold">
                13
              </Text>
              <Text fontSize="xl">دی</Text>
            </Center>
            <Text
              mr={{
                md: "4",
              }}
              mt={{
                base: "5",
                md: "1",
              }}
              textAlign="center"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Text>
          </Flex>
          <Text textAlign="justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Text>
          <Flex
            my="5"
            flexDir={{
              base: "column",
              md: "row",
            }}
            gridGap="4"
            justifyContent="space-between"
          >
            <Text display="flex" alignItems="center">
              <Icon as={FiClock} ml="2" />
              10صبح - 4 بعدازظهر
            </Text>
            <ForwardLink LinkText="اطلاعات بیشتر" />
          </Flex>
        </Flex>
      </SwiperSlide>
    ))}
  </CustomSwiper>
);
const EventsSection = () => {
  return (
    <>
      <Center flexDirection="column" mt="20">
        <Titles
          TitleText="رویدادهای آینده"
          SubTitleText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
        />
      </Center>

      <CardSwiper />
    </>
  );
};
export default EventsSection;

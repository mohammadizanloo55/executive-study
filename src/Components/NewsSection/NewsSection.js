import { Center, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";

import ForwardButton from "../ForwardButton/ForwardButton";
import Titles from "../Titles/Titles";
import CardImage1 from "./CardImage1.png";
import CardImage2 from "./CardImage2.jpg";
import CardImage3 from "./CardImage3.jpeg";

const NewsSection = () => {
  const CardImages = [CardImage1, CardImage2, CardImage3];
  return (
    <Center flexDir="column" mt="28">
      <Titles
        TitleText="اخبار"
        SubTitleText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده"
      />
      <Grid
        mt="20"
        gridTemplateColumns={{
          base: "repeat(1, auto)",
          md: "repeat(2,auto)",
          lg: "repeat(3,auto)",
        }}
        gap="5"
      >
        {CardImages.map((CardImage) => (
          <Flex
            key={CardImage}
            overflow="hidden"
            rounded="3xl"
            alignItems="center"
            maxW="xs"
            flexDirection="column"
            shadow="2xl"
          >
            <Image height="250" objectFit="cover" src={CardImage} />
            <Text
              display="flex"
              color="#565656"
              fontSize="sm"
              w="100%"
              alignItems="baseline"
              mt="5"
              mr="10"
            >
              <Icon as={FiCalendar} ml="2" />
              <span>1398/12/12</span>
            </Text>
            <Text
              px="5"
              textAlign="start"
              fontWeight="bold"
              mt="4"
              mb="5"
              color="#37474F"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Text>
          </Flex>
        ))}
      </Grid>
      <Center mb="5">
        <ForwardButton
          ButtonText="به ما بپیوندید"
          ButtonProps={{
            size: "lg",
          }}
        />
      </Center>
    </Center>
  );
};
export default NewsSection;

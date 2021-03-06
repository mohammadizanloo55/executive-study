import { Box, Center, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { FiBook, FiClipboard, FiHome, FiTarget, FiUsers } from "react-icons/fi";

import ForwardLink from "../ForwardLink/ForwardLink";
import Titles from "../Titles/Titles";

const ServicesCard = () => {
  const CardIcons = [FiTarget, FiBook, FiUsers, FiClipboard, FiHome];
  return (
    <Flex alignItems="center" flexDirection="column" my="10" fontSize="2xl">
      <Titles
        TitleText="سرویس های ما"
        SubTitleText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده"
      />
      <Grid
        mt="5"
        justifyItems="center"
        justifyContent="center"
        templateColumns={{
          sm: "repeat(1,auto)",
          md: "repeat(2,auto)",
          lg: "repeat(3,auto)",
        }}
        gap="5"
      >
        {CardIcons.map((CardIcon) => (
          <Box
            key={CardIcon}
            flexDir="column"
            shadow="xl"
            transition="all .3s"
            _hover={{
              boxShadow: "2xl",
            }}
            maxW="xs"
            p="10"
            rounded="2xl"
          >
            <Center rounded="100%" bg="#717CFF" width="77px" height="77px">
              <Icon color="#37474F" fontSize="5xl" as={CardIcon} />
            </Center>
            <Text textAlign="center" fontWeight="bold" my="4" color="#37474F">
              لورم ایپسوم
            </Text>
            <Text textAlign="start" fontSize="md" my="3" color="#37474F">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </Text>

            <ForwardLink
              LinkText="اطلاعات بیشتر"
              LinkProps={{
                mt: 6,
              }}
            />
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};
export default ServicesCard;

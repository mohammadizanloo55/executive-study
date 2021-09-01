import { Box, Center, Flex, Grid, Icon, Link, Text } from "@chakra-ui/react";
import {
  FiArrowLeft,
  FiBook,
  FiClipboard,
  FiHome,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const ServicesCard = () => {
  const CardIcons = [FiTarget, FiBook, FiUsers, FiClipboard, FiHome];
  return (
    <Flex alignItems="center" flexDirection="column" my="10" fontSize="2xl">
      <Text
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        fontWeight="bold"
      >
        لورم ایپسوم
      </Text>
      <Text
        mt="4"
        textAlign="justify"
        fontWeight="bold"
        maxW={{
          md: "container.sm",
          lg: "container.md",
        }}
        color="#7D7D7D"
        fontSize="medium"
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </Text>
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
            <Link fontSize="md" mt="6" color="#717CFF">
              لورم ایپسوم
              <Icon as={FiArrowLeft} color="#37474F" mr="3" fontSize="xl" />
            </Link>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};
export default ServicesCard;

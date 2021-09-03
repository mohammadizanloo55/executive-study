import { Flex, Grid, Image, Link, Text } from "@chakra-ui/react";

import IconBar from "../IconBar/IconBar";
import logo from "./logo.png";

const FooterSection = () => (
  <Grid
    bg="#707CFF"
    p="10"
    mt={{
      base: "10",
      md: "0",
    }}
    gridTemplateColumns={{
      base: "repeat(1,auto)",
      md: "repeat(4,auto)",
    }}
    justifyItems="center"
    color="white"
  >
    <Flex
      order={{
        base: 2,
        md: 0,
      }}
      mt={{
        base: 8,
        md: 0,
      }}
      w="100%"
      justifyItems="center"
      alignItems="center"
      flexDir="column"
      maxW="48"
    >
      <Image src={logo} />
      <Text
        my="4"
        w="100%"
        textAlign={{
          base: "center",
          md: "start",
        }}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      </Text>
      <Text mt="8" minW="52">
        &copy; این وبسایت کپی رایت ندارد!
      </Text>
    </Flex>

    {[1, 2].map((Key) => (
      <Flex
        key={Key}
        w="100%"
        justifyContent="start"
        alignContent="center"
        flexDir="column"
        maxW="40"
        mt={{
          base: "3",
          md: "0",
        }}
      >
        {[1, 2, 3, 4].map((LinkKey) => (
          <Link key={LinkKey} textAlign="center" mb="3">
            لورم ایپسوم
          </Link>
        ))}
      </Flex>
    ))}
    <Flex alignItems="center">
      <IconBar
        IconProps={{
          mx: "2",
          mt: {
            base: "5",
            md: "32",
          },
        }}
      />
    </Flex>
  </Grid>
);
export default FooterSection;

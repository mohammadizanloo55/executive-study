import { Flex, Grid, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import ForwardButton from "../ForwardButton/ForwardButton";
import StudentBackground from "./StudentBackground.png";
import StudentImage from "./StudentImage.png";

const Detail = () => {
  const [IsBigScreen] = useMediaQuery("(min-width: 768px)");
  const Icons = [FiInstagram, FiTwitter, FiFacebook];

  return (
    <Grid
      mt="10"
      gridTemplateColumns={{
        md: "repeat(2,auto)",
      }}
      justifyContent="space-around"
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign={{
          md: "start",
          base: "center",
        }}
      >
        <Text
          fontSize={{
            base: "3xl",
            sm: "4xl",
            lg: "5xl",
          }}
          color="#2F2F2F"
          fontWeight="bold"
        >
          لورم ایپسوم متن
          <Text as="span" display="inline" color="#717CFF">
            {" "}
            ساختگی{" "}
          </Text>
          <br />
          با تولید
        </Text>
        <Text
          color="#7D7D7D"
          textAlign="justify"
          fontWeight="bold"
          px="8"
          maxW="xl"
          fontSize="md"
          pt="5"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
        </Text>

        <ForwardButton ButtonText="آنلاین ثبت نام کنید" />

        <Grid
          my="10"
          sx={{
            gridTemplateColumns: "repeat(3,auto)",
          }}
          gap={{
            base: "10",
            md: "6",
          }}
          pl={{
            md: "16",
          }}
          w="100%"
          justifyContent={{
            base: "center",
            md: "flex-end",
          }}
        >
          {Icons.map((image) => (
            <Icon
              as={image}
              key={image}
              _hover={{
                fill: "#3C5B9A",
                cursor: "pointer",
              }}
              fontSize="3xl"
            />
          ))}
        </Grid>
      </Flex>
      {IsBigScreen && (
        <Flex justifyItems="end" position="relative">
          <Image
            src={StudentImage}
            sx={{
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "bottom",
            }}
            borderRadius="2xl"
            objectFit="cover"
            background={`url('${StudentBackground}')`}
          />
        </Flex>
      )}
    </Grid>
  );
};
export default Detail;

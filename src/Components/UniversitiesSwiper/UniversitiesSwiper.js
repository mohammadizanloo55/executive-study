import { Box, Center, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import University1 from "./University1.png";
import University2 from "./University2.png";
import University3 from "./University3.png";
import University4 from "./University4.png";

const CustomSwiper = lazy(() => import("../CustomSwiper/CustomSwiper"));

const UniversityIcons = [University1, University2, University3, University4];
const UniversityCallback = UniversityIcons.map((IconSrc) => () => (
  <Center justifyContent="center">
    <Image src={IconSrc} />
  </Center>
));
const UniversitiesSwiper = () => {
  const ResponsiveSlidesPerView = useBreakpointValue([1, 2, 3, 4]);

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
          Featured Universities
        </Text>
        <CustomSwiper
          Style={{
            paddingBottom: "4rem",
          }}
          UniversityIcons={UniversityIcons}
          SlidesPerView={ResponsiveSlidesPerView}
          Slides={UniversityCallback}
        />
      </Box>
    </Suspense>
  );
};
export default UniversitiesSwiper;

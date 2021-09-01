import { Text } from "@chakra-ui/react";

const Titles = ({ TitleText, SubTitleText }) => (
  <>
    <Text
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      fontWeight="bold"
    >
      {TitleText}
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
      {SubTitleText}
    </Text>
  </>
);

export default Titles;

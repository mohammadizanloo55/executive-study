import { Flex, Text } from "@chakra-ui/react";

import ForwardButton from "../ForwardButton/ForwardButton";

const MessageBoxSection = () => (
  <Flex
    mt="20"
    flexDir={{
      base: "column",
      md: "row",
    }}
    justifyContent={{
      md: "space-around",
    }}
    alignItems={{
      base: "center",
      md: "normal",
    }}
  >
    <Text
      mb="10"
      fontSize={{
        base: "3xl",
        md: "4xl",
      }}
      textAlign="center"
    >
      برای تعقیب رویاهایتان آماده اید؟
    </Text>
    <ForwardButton
      ButtonText="آنلاین ثبت نام کنید"
      ButtonProps={{
        mt: 0,
        size: "lg",
        py: "5",
        px: "20",
      }}
    />
  </Flex>
);
export default MessageBoxSection;

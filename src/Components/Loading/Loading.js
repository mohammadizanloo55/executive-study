import { Flex, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text fontSize="4xl" mb="10">
        ... Loading
      </Text>
      <Spinner size="xl" />
    </Flex>
  );
};
export default Loading;

import { Button, Icon } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const ForwardButton = ({ ButtonText, ButtonProps }) => (
  <Button
    mt="20"
    {...ButtonProps}
    colorScheme="blue"
    backgroundColor="#707CFF"
    color="white"
  >
    {ButtonText}
    <Icon as={FiArrowLeft} pr="1" fontSize="2xl" color="#2F2F2F" />
  </Button>
);
export default ForwardButton;

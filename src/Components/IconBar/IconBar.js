import { Icon } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Icons = [FiInstagram, FiTwitter, FiFacebook];

const IconBar = ({ IconProps }) => (
  <>
    {Icons.map((image) => (
      <Icon
        as={image}
        key={image}
        _hover={{
          fill: "#3C5B9A",
          cursor: "pointer",
        }}
        fontSize="3xl"
        {...IconProps}
      />
    ))}
  </>
);
export default IconBar;

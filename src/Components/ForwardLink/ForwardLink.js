import { Icon, Link } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const ForwardLink = ({ Href, LinkProps, LinkText }) => (
  <Link fontSize="md" href={Href} color="#717CFF" {...LinkProps}>
    {LinkText}
    <Icon as={FiArrowLeft} color="#37474F" mr="3" fontSize="xl" />
  </Link>
);
export default ForwardLink;

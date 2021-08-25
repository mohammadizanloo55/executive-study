import {
  Button,
  Flex,
  Image,
  Link,
  LinkBox,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMemo } from "react";

import Logo from "./logo.png";

const Header = () => {
  const LimitLinksNumber = useBreakpointValue({
    base: 0,
    sm: 2,
    md: "All",
  });

  const Links = useMemo(
    () =>
      ["خانه", "درباره ما", "سرویس های ما", "مسئولیت ها", "کشور"].filter(
        (Item, Index) => Index < LimitLinksNumber || LimitLinksNumber === "All"
      ),
    [LimitLinksNumber]
  );

  return (
    <Flex py="5" justifyContent="space-around" alignItems="center">
      <Image src={Logo} />
      <LinkBox>
        {Links.map((Item, Index) => (
          <Link
            sx={{
              transition: "all 0.5s",
              opacity: "1",
              position: "relative",
              _after: Index || {
                position: "absolute",
                display: "inline",
                left: "0",
                right: "0",
                top: "0",
                width: "40%",
                height: "3px",
                borderRadius: "1000px",
                background: "#717CFF",
                marginTop: "1.4rem",
                content: `' '`,
              },
              _hover: {
                opacity: "0.5",
              },
              _focus: {
                boxShadow: "none",
              },
            }}
            mx="4"
            href="#fake"
            key={Item}
          >
            {Item}
          </Link>
        ))}
        <Button
          _hover={{
            background: "#717CFF",
            color: "white",
          }}
          mr="5"
          transition="all 0.3s"
          variant="outline"
          rounded="2xl"
          border="2px"
          borderColor="#717CFF"
        >
          ثبت نام
        </Button>
      </LinkBox>
    </Flex>
  );
};
export default Header;

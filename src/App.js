import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const App = () => {
  const theme = extendTheme({ direction: "rtl" });
  return <ChakraProvider theme={theme}>ok</ChakraProvider>;
};

export default App;

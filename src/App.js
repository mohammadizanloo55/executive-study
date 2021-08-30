import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import Loading from "./Components/Loading/Loading";

const Header = lazy(() => import("./Components/Header/Header"));
const Detail = lazy(() => import("./Components/Detail/Detail"));
const App = () => {
  const theme = extendTheme({ direction: "rtl" });

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Container maxW="8xl">
          <Header />
          <Detail />
        </Container>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;

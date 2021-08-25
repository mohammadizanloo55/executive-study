import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import Loading from "./Components/Loading/Loading";

const Header = lazy(() => import("./Components/Header/Header"));

const App = () => {
  const theme = extendTheme({ direction: "rtl" });

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
    </ChakraProvider>
  );
};

export default App;

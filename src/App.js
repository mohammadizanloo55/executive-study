import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import Loading from "./Components/Loading/Loading";

const Header = lazy(() => import("./Components/Header/Header"));
const Detail = lazy(() => import("./Components/Detail/Detail"));
const UniversitiesSwiper = lazy(() =>
  import("./Components/UniversitiesSwiper/UniversitiesSwiper")
);
const ServicesSection = lazy(() =>
  import("./Components/ServicesSection/ServicesSection")
);
const NewsSection = lazy(() => import("./Components/NewsSection/NewsSection"));
const EventsSection = lazy(() =>
  import("./Components/EventsSection/EventsSection")
);
const App = () => {
  const theme = extendTheme({ direction: "rtl" });

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Container maxW="8xl">
          <Header />
          <Detail />
          <UniversitiesSwiper />
          <ServicesSection />
          <NewsSection />
          <EventsSection />
        </Container>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;

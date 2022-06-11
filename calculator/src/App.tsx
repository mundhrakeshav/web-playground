import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Calculator />
  </ChakraProvider>
);

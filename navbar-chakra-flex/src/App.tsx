import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./Components/Home";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Home />
	</ChakraProvider>
);

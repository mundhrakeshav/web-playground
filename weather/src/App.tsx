import { ChakraProvider } from "@chakra-ui/react";
import LocationContextProvider from "./context/location-context";
import HomePage from "./Pages/HomePage";
import extendedTheme from "./theme";

export const App = () => (
	<ChakraProvider theme={extendedTheme}>
		<LocationContextProvider>
			<HomePage />
		</LocationContextProvider>
	</ChakraProvider>
);

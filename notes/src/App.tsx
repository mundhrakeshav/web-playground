import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import NewNote from "./pages/NewNote";
import NoteContextProvider from "./context/notesContext";
export const App = () => (
	<ChakraProvider theme={theme}>
		<Flex>
			<BrowserRouter>
				<NoteContextProvider>

				<SideBar />
				<Routes>
					<Route path="/" element={<Notes />} />
					<Route path="/new" element={<NewNote />} />
				</Routes>
				</NoteContextProvider>
			</BrowserRouter>
		</Flex>
	</ChakraProvider>
);

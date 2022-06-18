import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Notes from "./Pages/Notes";
import NewNote from "./Pages/NewNote";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex>

    <SideBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
    </Flex>
	</ChakraProvider>
);

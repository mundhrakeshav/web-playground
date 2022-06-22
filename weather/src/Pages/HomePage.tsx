import { Flex } from "@chakra-ui/react";
import DashBoard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";
import DateContextProvider from "../context/date-context";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	return (
		<DateContextProvider>
			<Flex>
				<Flex flexDir="column">
					<Navbar />
					<DashBoard />
				</Flex>
				<Flex h="100vh">
					<SidePanel />
				</Flex>
			</Flex>
		</DateContextProvider>
	);
};

export default HomePage;

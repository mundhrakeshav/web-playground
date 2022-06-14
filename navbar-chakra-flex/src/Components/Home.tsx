import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import SideBar from "./Sidebar";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	return (
		<Flex>
			<SideBar />
		</Flex>
	);
};

export default Home;

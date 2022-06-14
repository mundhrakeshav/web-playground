import {
	Avatar,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { FiHome, FiMenu } from "react-icons/fi";

import { ColorModeSwitcher } from "../ColorModeSwitcher";
import NavItem from "./NavItem";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
	const [navSize, setNavSize] = useState(true);
	const toggleNavSize = () => setNavSize(!navSize);
	return (
		<Flex
			pos="sticky"
			left="2"
			h="95vh"
			w={navSize ? "200px" : "75px"}
			mt="2.5vh"
			background="whiteAlpha.50"
			boxShadow="0 2px 7px 0 grey"
			borderRadius={navSize ? "5px" : "20px"}
			flexDir="column"
			justifyContent="space-between"
		>
			<Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
				<IconButton
					aria-label=""
					background="none"
					mt="5"
					icon={<FiMenu />}
					onClick={toggleNavSize}
					size="lg"
				/>
				<NavItem navSize={navSize} icon={FiHome} title="Dashboard" />
			</Flex>
			<Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb="4">
				{navSize ? <Divider /> : <></>}
				<Flex mt="4" ml={navSize ? "auto" : "20px"}>
					<Avatar size="sm" />
					{navSize ? (
						<Flex flexDir="column" ml="4">
							<Heading as="h3" size="sm">
								Miss Dustin Swift
							</Heading>
							<Text>E-Commerce</Text>
						</Flex>
					) : (
						<></>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SideBar;

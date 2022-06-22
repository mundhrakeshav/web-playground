import {
	Flex,
	Heading,
	Text,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	InputRightAddon,
	IconButton,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { DateContext } from "../context/date-context";
import { LocationContext } from "../context/location-context";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const dateContext = useContext(DateContext);
	const locationContext = useContext(LocationContext);
	const [location, setLocation] = useState("");
	function onSearch() {
		locationContext.setLocation(location);
	}

	return (
		<Flex
			h="100px"
			w="65vw"
			pt="20px"
			pl="30px"
			backdropFilter="blur"
			background="blackAlpha.200"
			justifyContent="space-between"
		>
			<Flex flexDir="column">
				<Heading fontSize="30px">
					{dateContext.date.toLocaleDateString("en-US", {
						month: "long",
						year: "numeric",
					})}
				</Heading>
				<Text fontSize="18px">
					{dateContext.date.toLocaleDateString("en-US", {
						weekday: "long",
						month: "long",
						day: "numeric",
					})}
				</Text>
			</Flex>
			<Flex justifyContent="space-evenly" w="40vw">
				<InputGroup size="md" width="20vw">
					<InputLeftElement children={<FaSearch color="gray.300" />} />
					<Input
						variant="outline"
						size="md"
						placeholder="Search"
						value={location}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setLocation(e.currentTarget.value);
						}}
					/>
					<InputRightAddon
						children={
							<Button
								background="transparent"
								w="100%"
								_hover={{ bg: "transparent" }}
								onClick={onSearch}
							>
								Search
							</Button>
						}
					/>
				</InputGroup>
				<IconButton aria-label="notification" icon={<IoMdNotifications />} />
				<IconButton aria-label="profile" icon={<FaUser />} />
			</Flex>
		</Flex>
	);
};

export default Navbar;

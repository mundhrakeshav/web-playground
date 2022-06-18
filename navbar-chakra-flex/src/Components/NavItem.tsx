import {
	Flex,
	Icon,
	Link,
	Menu,
	MenuButton,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { IconType } from "react-icons";

interface NavItemProps {
	navSize: boolean;
	icon: IconType;
	title: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ navSize, icon, title }) => {
	const [hover, setHover] = useState(false);
	return (
		<Flex
			mt="30px"
			flexDir="column"
			w="100%"
			alignItems={navSize ? "flex-start" : "center"}
		>
			<Menu placement="right">
				<Link
					background={"#AEC8CA"}
					p="3"
					borderRadius="8"
					w={navSize ? "100%" : ""}
				>
					<MenuButton>
						<Flex>
							<Icon as={Icon} />
							<Text>{title}</Text>
						</Flex>
					</MenuButton>
				</Link>
				<MenuList>Test</MenuList>
			</Menu>
		</Flex>
	);
};

export default NavItem;

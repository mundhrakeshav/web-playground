import {
	Avatar,
	Flex,
	IconButton,
	Spacer,
	useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdSearch,
	MdAdd,
	MdHome,
	MdFavorite,
	MdNote,
	MdLabel,
	MdPeople,
	MdInfo,
} from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
	const sideBarColor = useColorModeValue("blackAlpha.200", "blackAlpha.300");
	return (
		<Flex
			flexDir="column"
			width="60px"
			height="100vh"
			background={sideBarColor}
			pos="sticky"
			p="10px"
			alignItems="center"
			pt="75px"
		>
			<ColorModeSwitcher justifySelf="flex-end" />
			<Flex>
				<IconButton
					aria-label="Back"
					icon={<MdKeyboardArrowLeft />}
					size="xs"
					mr="1px"
					variant="ghost"
				/>
				<IconButton
					aria-label="Foreward"
					icon={<MdKeyboardArrowRight />}
					size="xs"
					ml="1px"
					variant="ghost"
				/>
			</Flex>
			<IconButton
				aria-label="Search"
				icon={<MdSearch />}
				size="md"
				mt="30px"
				borderRadius="20px"
			/>
			<IconButton
				aria-label="Add"
				icon={<MdAdd />}
				size="md"
				mt="10px"
				mb="30px"
				borderRadius="20px"
				background="green.600"
				variant="ghost"
			/>
			<IconButton
				aria-label="Home"
				icon={<MdHome />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<IconButton
				aria-label="Favourite"
				icon={<MdFavorite />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<IconButton
				aria-label="Note"
				icon={<MdNote />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<IconButton
				aria-label="Label"
				icon={<MdLabel />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<IconButton
				aria-label="People"
				icon={<MdPeople />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<IconButton
				aria-label="Trash"
				icon={<IoMdTrash />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
			<Spacer />
			<IconButton
				aria-label="Info"
				icon={<MdInfo />}
				size="md"
				mt="10px"
				borderRadius="20px"
				variant="ghost"
			/>
            <Avatar size="xs" mb="20px" />
		</Flex>
	);
};

export default SideBar;

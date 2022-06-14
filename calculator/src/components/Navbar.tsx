import { FunctionComponent } from "react";
import { Container, Center, Grid, GridItem } from "@chakra-ui/react";
import "./Navbar.css";
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<nav>
			<Container height="100" minW="100%" p="0">
				<Grid templateColumns="repeat(9, 1fr)" gap="6">
					<GridItem w="300px" h="70" pt={5}>
						<Center className="brand">Calculator</Center>
					</GridItem>
					<GridItem w="100%" h="70" colSpan={4} />
					<GridItem w="100%" h="70" pt={5}>
						<Center>Nav1</Center>
					</GridItem>
					<GridItem w="100%" h="70" pt={5}>
						<Center>Nav1</Center>
					</GridItem>
					<GridItem w="100%" h="70" pt={5}>
						<Center>Nav1</Center>
					</GridItem>
					<GridItem w="100%" h="70" pt={5}>
						<Center>Nav1</Center>
					</GridItem>
				</Grid>
			</Container>
		</nav>
	);
};

export default Navbar;

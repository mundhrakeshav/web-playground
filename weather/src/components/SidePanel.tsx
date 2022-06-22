import { Flex, Heading, Text, Spinner, Skeleton } from "@chakra-ui/react";
import { useContext } from "react";
import { LocationContext } from "../context/location-context";
import Time from "./Time";

interface SidePanelProps {}

const SidePanel: React.FunctionComponent<SidePanelProps> = () => {
	const locationContext = useContext(LocationContext);
	console.log(locationContext.locationData);

	return (
		<Flex background="blackAlpha.200" w="35vw" p="30px">
			<Flex w="100%" flexDir="column">
				<Heading as="h1" fontSize="30px" width="100%">
					Hi, Ser
				</Heading>

				{!locationContext.isLoading ? (
					<>
						<Text>
							{locationContext.locationData.location.name +
								", " +
								locationContext.locationData.location.region}
						</Text>
						<Text>{locationContext.locationData.location.country}</Text>
					</>
				) : (
					<Skeleton />
				)}
			</Flex>
			<Time />
		</Flex>
	);
};

export default SidePanel;

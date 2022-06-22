import { Flex, Heading, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { FunctionComponent, useContext } from "react";
import { FaLocationArrow, FaSearchLocation } from "react-icons/fa";
import { LocationContext } from "../context/location-context";

interface DashBoardProps {}

const DashBoard: FunctionComponent<DashBoardProps> = () => {
	const locationContext = useContext(LocationContext);
	console.log({ locationContext });

	return !locationContext.isLoading ? (
		<Flex p="30px" w="65vw" flexDir="column">
			<Flex justifyContent="space-between" w="100%">
				<Text fontSize="20px">Today Overview</Text>
				<Flex>
					<Text mr="10px">
						{locationContext.locationData.location.lat +
							", " +
							locationContext.locationData.location.lon}
					</Text>
					<FaLocationArrow />
				</Flex>
			</Flex>
			<Flex flexDir="column">
                <Flex  w="100%" justifyContent="space-evenly" m="20px">
                    <Flex h="15vh" background="whiteAlpha.300" w="40%" borderRadius="20px" p="15px" flexDir="column">
                            <Text fontSize="20px" fontWeight="bold">Wind</Text>
                        <Flex justifyContent="space-evenly">
                            <Heading fontSize="4c0px">

                            {locationContext.locationData.current.wind_dir + " " + locationContext.locationData.current.wind_degree + "°"}
                            </Heading>
                            <Heading fontSize="40px">

                            {locationContext.locationData.current.wind_kph }
                            </Heading>
                            </Flex>
                    </Flex>
				    <Flex h="15vh" background="whiteAlpha.300" w="40%" borderRadius="20px" p="15px"> </Flex>
                </Flex>
                <Flex  w="100%" justifyContent="space-evenly" m="20px">
				    <Flex h="15vh" background="whiteAlpha.300" w="40%" borderRadius="20px" p="15px"> </Flex>
				    <Flex h="15vh" background="whiteAlpha.300" w="40%" borderRadius="20px" p="15px"> </Flex>
                </Flex>
            </Flex>
		</Flex>
	) : (
		<Skeleton h="50vh" />
	);
};

export default DashBoard;

import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { DateContext } from "../context/date-context";

interface TimeProps {}

const Time: React.FunctionComponent<TimeProps> = () => {
	const dateContext = useContext(DateContext);

	return (
		<Flex w="100%" justifyContent="end">
			<Heading as="h1" fontSize="30px">
				{dateContext.date.toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
				})}
			</Heading>
		</Flex>
	);
};

export default Time;

import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Note } from "../types/Note";

interface NoteBoxProps {
	note: Note;
}

const NoteBox: FunctionComponent<NoteBoxProps> = ({ note }) => {
	return (
		<Flex
			flexDir="column"
			border="1px solid white"
			width="200px"
			h="400px"
			borderRadius="20px"
			m="5px"
			p="20px"
		>
			<Heading as="h4" size="30px">
				{note.title.toUpperCase()}
			</Heading>
			<br />
			<Text overflow="clip">{note.body}</Text>
		</Flex>
	);
};

export default NoteBox;

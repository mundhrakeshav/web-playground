import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import useLocalStorage from "../hooks/useLocalStrorage";
import { Note } from "../types/Note";
import NoteBox from "./../components/NoteBox";
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
	const [notesLocalStorage, setNotesLocalStorage] = useLocalStorage("notes");
	console.log(notesLocalStorage);
	const notes = notesLocalStorage.map((note: any) => {
		return <NoteBox note={note} />;
	});
	console.log(notes);

	return (
		<Flex m="30px" wrap="wrap">
			{notes}
		</Flex>
	);
};

export default Notes;

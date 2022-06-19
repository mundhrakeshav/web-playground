import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent, useContext } from "react";
import { NoteContext } from "../context/notesContext";
import useLocalStorage from "../hooks/useLocalStrorage";
import { Note } from "../types/Note";
import NoteBox from "./../components/NoteBox";
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
	const [notesLocalStorage, setNotesLocalStorage] = useLocalStorage("notes");
	const noteContext = useContext(NoteContext);

	const noteList = notesLocalStorage.map((note: any) => {
		return <NoteBox note={note} key={note.id} />;
	});

	return (
		<Flex m="30px" wrap="wrap">
			{noteList}
		</Flex>
	);
};

export default Notes;

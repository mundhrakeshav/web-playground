import {
	Button,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	Textarea,
} from "@chakra-ui/react";
import { FunctionComponent, MouseEventHandler, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStrorage";
import { Note } from "../types/Note";

interface NotePageProps {}

const NotePage: FunctionComponent<NotePageProps> = () => {
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");
	const [notes, setNotes] = useLocalStorage("notes");
	let { id } = useParams();
	let navigate = useNavigate();

	const handleSave: MouseEventHandler<HTMLButtonElement> = () => {		
		if (id !== undefined) {
			notes[id] = {
				id: id,
				title,
				body: note,
				createdAt: new Date().getTime().toString(),
				updatedAt: new Date().getTime().toString(),
			};
			console.log(notes);
			
			setNotes(notes);
			navigate("/");
		} else {
			console.log("ID is undefined");
			setNotes([
				...notes,
				{
					id: notes.length,
					title,
					body: note,
					createdAt: new Date().getTime().toString(),
					updatedAt: new Date().getTime().toString(),
				},
			]);
		}
	};

	function getNoteFromID() {
		return notes.find((note: Note) => note.id.toString() === id);
	}

	return (
		<Flex width="70%" mt="100px" flexDir="column" ml="80px">
			<Flex justifyContent="space-between">
				<Editable
					placeholder="Title"
					flexWrap="wrap"
					fontSize="30px"
					height="50px"
					pb="10px"
					pl="10px"
					borderRadius="20px"
					value={title}
					onChange={(e: string) => {
						setTitle(e);
					}}
				>
					<EditablePreview />
					<EditableInput />
				</Editable>
				<Button
					colorScheme="teal"
					size="sm"
					mb="10px"
					ml="10px"
					onClick={handleSave}
				>
					SAVE
				</Button>
			</Flex>
			<Flex justifyContent="center">
				<Textarea
					placeholder="Note"
					maxHeight="300px"
					value={note}
					onChange={(e: any) => {
						setNote(e.target.value);
					}}
				/>
			</Flex>
		</Flex>
	);
};

export default NotePage;

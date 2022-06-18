import {
	Button,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	Textarea,
} from "@chakra-ui/react";
import { EventHandler } from "framer-motion/types/events/types";
import { FunctionComponent, MouseEventHandler, useState } from "react";
import useLocalStorage from "../hooks/useLocalStrorage";
import { Note } from "../types/Note";

interface NewNoteProps {
	title?: string;
	description?: string;
}

const NewNote: FunctionComponent<NewNoteProps> = () => {
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");
	const [notes, setNotes] = useLocalStorage("notes");
	const createNote: Function = (): Note => {
		const _note: Note = {
			id: 1,
			title,
			body: note,
			createdAt: new Date().getTime().toString(),
			updatedAt: new Date().getTime().toString(),
		};
		return _note;
	};
	const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
		const _note: Note = createNote();
		console.log(_note.toString());
		setNotes([...notes, _note]);
	};
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

export default NewNote;

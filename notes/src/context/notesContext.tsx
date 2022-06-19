import React, {
	createContext,
	useState,
	FunctionComponent,
	useEffect,
} from "react";
import useLocalStorage from "../hooks/useLocalStrorage";

export const NoteContext = createContext({});

interface NoteContextProps {
	children?: React.ReactNode;
}

const NoteContextProvider: FunctionComponent<NoteContextProps> = ({
	children,
}) => {
	const [notes, setNotes] = useLocalStorage("notes");
	useEffect(() => {}, [notes]);
	return (
		<NoteContext.Provider value={{ notes }}>{children}</NoteContext.Provider>
	);
};

export default NoteContextProvider;

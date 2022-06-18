import React, { createContext, useState, FunctionComponent, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStrorage";

export const NoteContext = createContext({});

interface NoteContextProps {
	childern?: React.ReactNode | React.ReactNode[];
}

const NoteContextProvider: FunctionComponent<NoteContextProps> = (props) => {
    const [notes, setNotes] = useLocalStorage("notes");
    useEffect(() => { }, [notes]);
	return (
		<NoteContext.Provider value={{notes}}>{props.childern}</NoteContext.Provider>
	);
};

export default NoteContextProvider;

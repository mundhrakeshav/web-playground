import { useState, useEffect } from "react";
function getStorageValue(key: string, defaultValue: []): any[] {
	const value: string | null = localStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
}

export default function useLocalStorage(
	key: string,
	defaultValue: [] = []
): [any, Function] {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});
	//! TODO: Fix this, new value isn't updated to localStorage
	useEffect(() => {
		console.log("TEST", value);
		
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

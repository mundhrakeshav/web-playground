import { FunctionComponent, createContext, useState, useEffect } from "react";

interface DateContextProps {
	date: Date;
}
export const DateContext = createContext<DateContextProps>({
	date: new Date(),
});

interface DateContextProviderProps {
	children?: React.ReactNode;
}

const DateContextProvider: FunctionComponent<DateContextProviderProps> = ({
	children,
}) => {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setDate(new Date());
		}, 1000);
	}, []);
	return (
		<DateContext.Provider value={{ date }}> {children} </DateContext.Provider>
	);
};

export default DateContextProvider;

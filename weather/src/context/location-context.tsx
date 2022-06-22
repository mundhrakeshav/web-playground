import { FunctionComponent, createContext, useState, useEffect } from "react";
import { getCurrentWeather } from "../functions/weatherAPI";

interface LocationContextProps {
	location: string;
	setLocation: Function;
	locationData: any;
	isLoading: boolean;
}

export const LocationContext = createContext<LocationContextProps>({
	location: "Jaipur",
	setLocation: () => {},
	locationData: {},
	isLoading: true,
});

interface LocationContextProviderProps {
	children?: React.ReactNode;
}

const LocationContextProvider: FunctionComponent<
	LocationContextProviderProps
> = ({ children }) => {
	const [location, setLocation] = useState("Jaipur");
	const [locationData, setLocationData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	async function setLocationAndGetData(_newLocation: string): Promise<object> {
		setIsLoading(true);
		setLocation(_newLocation);
		console.log({ location });
		const _locationData = await getCurrentWeather(location);
		setLocationData(_locationData);
		setIsLoading(false);
		return _locationData;
	}

	useEffect(() => {
		setLocationAndGetData(location);
	}, [location]);

	return (
		<LocationContext.Provider
			value={{ location, setLocation, locationData, isLoading }}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContextProvider;

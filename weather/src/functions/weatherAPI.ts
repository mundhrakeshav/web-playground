import axios from "axios";
import { APIKEYWeatherAPI, baseURLWeatherAPI } from "../constants/weatherAPI";

const axiosInstance = axios.create({
	baseURL: baseURLWeatherAPI,
});
export async function getCurrentWeather(_location: string) {
	const _response = await axiosInstance.get(
		`current.json?key=${APIKEYWeatherAPI}&q=${_location}&aqi=yes`
	);
	return _response.data;
}

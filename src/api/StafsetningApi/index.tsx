import Axios, { AxiosRequestConfig } from "axios";
import { getAuthToken } from "../../services";

/**
 * Creates an instance of
 * axios that always uses the stafsetning.is api
 * base route
 */
const axios = Axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://localhost:5000"
			: "https://api.stafsetning.is/"
});

/**
 * Adds middle ware that gets the auth token for
 * each request call
 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers["Authorization"] = getAuthToken();
	return config;
});

export const Api = axios;

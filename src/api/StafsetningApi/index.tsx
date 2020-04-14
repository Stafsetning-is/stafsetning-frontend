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
			? "https://stafs-api.herokuapp.com"
			: "https://stafs-api.herokuapp.com",
});

/**
 * Adds middle ware that gets the auth token for
 * each request call
 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
	if (getAuthToken()) config.headers["Authorization"] = getAuthToken();
	return config;
});

export const Api = axios;
import Axios, { AxiosRequestConfig } from "axios";
import { getAuthToken } from "../../services";
import { URL } from "../utils";
/**
 * Creates an instance of
 * axios that always uses the stafsetning.is api
 * base route
 */
const axios = Axios.create({
	baseURL: URL,
});

/**
 * Adds middle ware that gets the auth token for
 * each request call
 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
	if (getAuthToken())
		config.headers["Authorization"] = `Bearer ${getAuthToken()}`;
	return config;
});

export const Api = axios;

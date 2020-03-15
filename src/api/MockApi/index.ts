import { Practice } from "../../models";

/**
 * Returns a promise of data
 * that will resolve in 1250ms
 * @param data Data to return after delay
 */
const delay = <T>(data: T): Promise<T> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(data), 1500);
	});
};

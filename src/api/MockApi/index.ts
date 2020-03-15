import { Practice } from "../../models";

/**
 * Returns an practice object
 */
export const getPracticeById = (id: string): Promise<Practice> => {
	return delay({
		errors: [
			{ charAt: 15, error: "a" },
			{ charAt: 20, error: "b" }
		],
		exerciseString: ".",
		duration: 1,
		exercise: "a",
		_id: "a"
	});
};

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

import { URlService } from "../../../../../services";
import { getExerciseById } from "../../../../../api";

/**
 * fetches textparts and returns them in a callback
 * @param cb callback that takes exercise text as argument
 */
export const fetchExerciseText = async (cb: (data: string[]) => void) => {
	try {
		const data = await getExerciseById(extractIdFromUrl());
		cb(data);
	} catch (error) {}
};

/**
 * Responsible from extracting id
 * from the url
 */
const extractIdFromUrl = () => {
	try {
		return URlService.matchFromUrl(new RegExp(/(?<=\/)\w+\/?$/g));
	} catch (error) {
		throw Error("Failed to extract  exercise id from url");
	}
};

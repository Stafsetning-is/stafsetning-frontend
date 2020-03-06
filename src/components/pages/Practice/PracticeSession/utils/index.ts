import { URlService } from "../../../../../services";
import { getExerciseById } from "../../../../../api";

/**
 * fetches textparts and returns them in a callback
 * @param cb callback that takes exercise text as argument
 */
export const fetchExerciseText = async (
	exerciseId: string,
	cb: (data: string[]) => void
) => {
	try {
		const data = await getExerciseById(exerciseId);
		cb(data);
	} catch (error) {}
};

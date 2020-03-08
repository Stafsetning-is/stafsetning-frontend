import { URlService } from "../../../../../services";
import { getExerciseById } from "../../../../../api";
import { Exercise } from "../../../../../models";
/**
 * fetches textparts and returns them in a callback
 * @param cb callback that takes exercise text as argument
 */
export const fetchExerciseText = async (
	exerciseId: string
): Promise<Exercise> => {
	try {
		const parts = await getExerciseById(exerciseId);
		return {
			sentenceParts: parts
		};
	} catch (error) {
		throw Error("Ekki tókst að sækja æfingu");
	}
};

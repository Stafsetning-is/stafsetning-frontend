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
			sentenceParts: parts,
			title: "Kalli for i bud",
			completed: true,
			bestAttempt: 0.17,
			exerciseId: "21234"
		};
	} catch (error) {
		throw Error("Ekki tókst að sækja æfingu");
	}
};

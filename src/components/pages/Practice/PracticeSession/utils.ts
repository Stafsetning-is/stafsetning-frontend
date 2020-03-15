import { Api } from "../../../../api";
import { Exercise } from "../.././../../models";
/**
 * fetches exercise from backend
 * @param id the id of the exercise
 */
export const fetchExerciseText = async (id: string) => {
	try {
		const { data } = await Api.get<Exercise>(`/api/v1/exercises/${id}`);
		return data;
	} catch (error) {
		throw Error("Ekki tókst að sækja æfingu");
	}
};

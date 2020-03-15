import { Api } from "../../../../api";
import { IResponse } from "./interface";
/**
 * fetches exercise from backend
 * @param id the id of the exercise
 */
export const fetchExerciseText = async (id: string) => {
	try {
		const { data } = await Api.get<IResponse>(`/api/v1/exercises/${id}`);
		return data;
	} catch (error) {
		throw Error("Ekki tókst að sækja æfingu");
	}
};

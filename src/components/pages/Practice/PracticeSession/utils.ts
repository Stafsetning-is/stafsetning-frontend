import { URlService } from "../../../../services";
import { Api } from "../../../../api";
import { IResponse } from "./interface";
/**
 * fetches textparts and returns them in a callback
 * @param cb callback that takes exercise text as argument
 */
export const fetchExerciseText = async (exerciseId: string) => {
	try {
		const { data } = await Api.get<IResponse>("/api/v1/featured_exercises/");
		return data;
	} catch (error) {
		throw Error("Ekki tókst að sækja æfingu");
	}
};

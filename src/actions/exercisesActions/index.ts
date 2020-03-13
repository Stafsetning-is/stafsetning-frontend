import { Api } from "../../api";
import { Exercise } from "../../models";
import { Dispatch } from "redux";
import { GetExerciseSampleAction, GetExercisesByUserAction } from "./interface";
import { ActionTypes } from "../types";

export function fetchExercisesSample() {
	return async function(dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Exercise[]>("/api/open/exercise_sample");

			dispatch<GetExerciseSampleAction>({
				type: ActionTypes.getExerciseSample,
				payload: data
			});
		} catch (error) {
			console.log("Error getting sample");
		}
	};
}

export * from "./interface";

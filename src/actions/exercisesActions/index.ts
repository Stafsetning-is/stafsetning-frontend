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

export function fetchExercisesForUser() {
	return async function(dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Exercise[]>(
				"/api/v1/exercises/by_difficulty"
			);
			dispatch<GetExercisesByUserAction>({
				type: ActionTypes.getExercisesByUser,
				payload: data
			});
		} catch (error) {
			console.log("Error getting exercises");
		}
	};
}

export * from "./interface";

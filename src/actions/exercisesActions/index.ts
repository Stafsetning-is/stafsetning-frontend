import { Api } from "../../api";
import { Exercise } from "../../models";
import { Dispatch } from "redux";
import {
	GetExerciseSampleAction,
	GetExercisesByUserAction,
	StarExerciseInSelectionAction,
} from "./interface";
import { ActionTypes } from "../types";

export function fetchExercisesSample() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Exercise[]>("/api/open/exercise_sample");

			dispatch<GetExerciseSampleAction>({
				type: ActionTypes.getExerciseSample,
				payload: data,
			});
		} catch (error) {
			console.log("Error getting sample");
		}
	};
}

export function fetchExercisesForUser() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Exercise[]>(
				"/api/v1/exercises/by_difficulty"
			);
			dispatch<GetExercisesByUserAction>({
				type: ActionTypes.getExercisesByUser,
				payload: data,
			});
		} catch (error) {
			console.log("Error getting exercises");
		}
	};
}

export function reloadSelection() {
	return {
		type: ActionTypes.reloadSelection,
		payload: null,
	};
}

export function starExerciseInSelection(id: string, save: boolean) {
	const saveEndpoint =
		`/api/v1/users/exercises/${id}/` + (save ? "save" : "unsave");

	return async function (dispatch: Dispatch) {
		try {
			await Api.post<void>(saveEndpoint);
			dispatch<StarExerciseInSelectionAction>({
				type: ActionTypes.starExerciseInSelection,
				payload: { saved: save, exercise: id },
			});
		} catch (error) {
			console.log("Error getting exercises");
		}
	};
}

export * from "./interface";

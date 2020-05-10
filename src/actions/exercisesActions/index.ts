import { Api } from "../../api";
import { Exercise } from "../../models";
import { Dispatch } from "redux";
import {
	GetExerciseSampleAction,
	GetExercisesByUserAction,
	StarExerciseInSelectionAction,
} from "./interface";
import { ActionTypes } from "../types";

/**
 * EXERCISE ACTIONS
 *
 * Here are all the actions that
 * deal with the list of exercises that are
 * stored in the exercisesReducer.
 *
 * These actions are:
 *     - fetchExerciseSample
 *     - fetchExercisesForUser
 *     - reloadSelection
 *     - starExerciseInSelection
 */

/**
 * Returns async action creator that fetches
 * an sample of exercise for an guest
 * that is not logged in
 */
export function fetchExercisesSample() {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// fetches from open api
			const { data } = await Api.get<Exercise[]>(
				"/api/open/exercise_sample"
			);

			// dispatches the action
			dispatch<GetExerciseSampleAction>({
				type: ActionTypes.getExerciseSample,
				payload: data,
			});
		} catch (error) {
			// on error we do nothing
		}
	};
}

/**
 * returns async action creator that
 * fetches exercises for certain user
 */
export function fetchExercisesForUser() {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// calls the api to get the exercises array
			const { data } = await Api.get<Exercise[]>(
				"/api/v1/exercises/by_difficulty"
			);

			// dispatches the action
			dispatch<GetExercisesByUserAction>({
				type: ActionTypes.getExercisesByUser,
				payload: data,
			});
		} catch (error) {
			// on error we do nothing
		}
	};
}

/**
 * action creator that reloads the selection
 */
export function reloadSelection() {
	return {
		type: ActionTypes.reloadSelection,
		payload: null,
	};
}

/**
 * Save an exercise in selection
 * @param id exercise id
 * @param save should it save (true) or unsave (false)
 */
export function starExerciseInSelection(id: string, save: boolean) {
	// concat endpoint based on wether save is true or false
	const saveEndpoint =
		`/api/v1/users/exercises/${id}/` + (save ? "save" : "unsave");

	// returns acyn action creator
	return async function (dispatch: Dispatch) {
		try {
			// sends the request
			await Api.post<void>(saveEndpoint);
			// dispatches the action
			dispatch<StarExerciseInSelectionAction>({
				type: ActionTypes.starExerciseInSelection,
				payload: { saved: save, exercise: id },
			});
		} catch (error) {
			// do nothing on error
		}
	};
}

export * from "./interface";

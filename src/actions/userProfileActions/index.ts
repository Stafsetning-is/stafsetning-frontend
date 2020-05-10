import { Api } from "../../api";
import { Exercise, Trophy } from "../../models";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import {
	GetFinishedExercisesAction,
	GetSavedExercisesAction,
	SetOpenDrawerAction,
	FetchTrophiesAction,
} from "./interface";
import { Drawers } from "../../services";

/**
 * USERPROFILE ACTIONS
 *
 * this file contains all actions
 * to manipulate and edit the user profile
 * state
 *
 * these actions include
 *     - fetchFinishedExercises
 *     - getSavedExercises
 *     - setOpenDrawer
 *     - fetchTrophies
 */

/**
 * returns acsync action creator that
 * fetches all finished exercises for
 * the logged in user
 */
export function fetchFinishedExercises() {
	// returns async action cretor
	return async function (dispatch: Dispatch) {
		try {
			// calls the api
			const { data } = await Api.get<Exercise[]>("/api/v1/practices/");
			// dispatches the finished exercises to store
			dispatch<GetFinishedExercisesAction>({
				type: ActionTypes.getFinishedExercises,
				payload: data,
			});
		} catch (error) {
			// do nothing if request fails
		}
	};
}

/**
 * fetches saved exercises from the backend
 * returns an async action creator
 */
export function getSavedExercises() {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// call the api
			const { data } = await Api.get<Exercise[]>(
				"/api/v1/users/exercises/saved"
			);
			// dispatch the action
			dispatch<GetSavedExercisesAction>({
				type: ActionTypes.getSavedExercises,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
}

/**
 * sets the open drawer on the user profile
 * @param drawer the Drawers type union
 */
export function setOpenDrawer(drawer: Drawers): SetOpenDrawerAction {
	// return action
	return {
		type: ActionTypes.setOpenDrawer,
		payload: drawer,
	};
}

/**
 * Fetches user trophies asyncronously
 * for the user profile
 */
export function fetchTrophies() {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// calls the api
			const { data } = await Api.get<Trophy[]>("/api/v1/users/trophies");
			// dispatches the fetchTrophies action
			dispatch<FetchTrophiesAction>({
				type: ActionTypes.fetchTrophies,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
}

export * from "./interface";

import { Api } from "../../api";
import { Exercise } from "../../models";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { GetFinishedExercisesAction, GetSavedExercisesAction, SetOpenDrawerAction } from "./interface";
import { Drawers } from "../../services";

export function fetchFinishedExercises() {
    return async function (dispatch: Dispatch) {
        try {
            const { data } = await Api.get<Exercise[]>("/api/v1/practices/");

            dispatch<GetFinishedExercisesAction>({
                type: ActionTypes.getFinishedExercises,
                payload: data,
            });
        } catch (error) {
            console.log("Error getting sample");
        }
    };
}

export function getSavedExercises() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Exercise[]>("/api/v1/users/exercises/saved");
			dispatch<GetSavedExercisesAction>({
				type: ActionTypes.getSavedExercises,
				payload: data
			});
		} catch (error) {
			console.log("Error getting exercises");
		}
	};
}

export function setOpenDrawer(drawer: Drawers): SetOpenDrawerAction {
    return {
        type: ActionTypes.setOpenDrawer,
        payload: drawer
    };
}

export * from "./interface";

import { ActionTypes } from "../types";
import { Exercise } from "../../models";

export interface GetExerciseSampleAction {
	type: ActionTypes.getExerciseSample;
	payload: Exercise[];
}

export interface GetExercisesByUserAction {
	type: ActionTypes.getExercisesByUser;
	payload: Exercise[];
}

export interface ReloadSelectionAction {
	type: ActionTypes.reloadSelection;
	payload: null;
}

export interface StarExerciseInSelectionAction {
	type: ActionTypes.starExerciseInSelection;
	payload: { saved: boolean; exercise: string };
}

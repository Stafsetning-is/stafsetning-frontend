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

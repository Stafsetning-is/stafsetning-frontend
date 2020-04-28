import { ActionTypes } from "../types";
import { Exercise } from "../../models";

export interface GetFinishedExercisesAction {
    type: ActionTypes.getFinishedExercises;
    payload: Exercise[];
}

export interface getSavedExercisesAction {
    type: ActionTypes.getSavedExercises;
    payload: Exercise[];
}
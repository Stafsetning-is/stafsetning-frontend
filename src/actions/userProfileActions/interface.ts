import { ActionTypes } from "../types";
import { Exercise } from "../../models";
import { Drawers } from "../../services";

export interface GetFinishedExercisesAction {
    type: ActionTypes.getFinishedExercises;
    payload: Exercise[];
}

export interface GetSavedExercisesAction {
    type: ActionTypes.getSavedExercises;
    payload: Exercise[];
}

export interface SetOpenDrawerAction {
    type: ActionTypes.setOpenDrawer;
    payload: Drawers;
}

export interface ChangeDifficultyAction {
    type: ActionTypes.changeDifficulty;
    payload: number;
}

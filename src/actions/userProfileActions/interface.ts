import { ActionTypes } from "../types";
import { Practice } from "../../models";

export interface GetFinishedExercisesAction {
    type: ActionTypes.getFinishedExercises;
    payload: Practice[];
}

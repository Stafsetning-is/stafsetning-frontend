import { Api } from "../../api";
import { Practice } from "../../models";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { GetFinishedExercisesAction } from "./interface";

export function fetchFinishedExercises() {
    return async function (dispatch: Dispatch) {
        try {
            const { data } = await Api.get<Practice[]>("/api/v1/practices/");

            dispatch<GetFinishedExercisesAction>({
                type: ActionTypes.getFinishedExercises,
                payload: data,
            });
        } catch (error) {
            console.log("Error getting sample");
        }
    };
}

export * from "./interface";

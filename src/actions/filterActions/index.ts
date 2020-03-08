import { SetMinWordCountAction, SetHideCompletedAction } from "./interface";
import { ActionTypes } from "../types";

export function setMinWordCount(newMin: number): SetMinWordCountAction {
    return {
        type: ActionTypes.setMinWordCount,
        payload: newMin
    };
}

export function setHideCompleted(hide: boolean): SetHideCompletedAction {
    return {
        type: ActionTypes.setHideCompleted,
        payload: hide
    };
}

export * from "./interface";

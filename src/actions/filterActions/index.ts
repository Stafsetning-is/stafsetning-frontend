import { SetMinWordCountAction } from "./interface";
import { ActionTypes } from "../types";

export function setMinWordCount(newMin: number): SetMinWordCountAction {
    return {
        type: ActionTypes.setMinWordCount,
        payload: newMin
    };
}

export * from "./interface";

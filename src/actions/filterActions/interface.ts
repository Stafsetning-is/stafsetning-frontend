import { ActionTypes } from "../types";

export interface SetMinWordCountAction {
    type: ActionTypes.setMinWordCount;
    payload: number;
}
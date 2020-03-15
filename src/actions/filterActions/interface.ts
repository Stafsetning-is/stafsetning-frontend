import { ActionTypes } from "../types";

export interface SetMinWordCountAction {
	type: ActionTypes.setMinWordCount;
	payload: number;
}

export interface SetHideCompletedAction {
	type: ActionTypes.setHideCompleted;
	payload: boolean;
}
export interface SetMaxWordCountAction {
	type: ActionTypes.setMaxWordCount;
	payload: number;
}

import {
	SetMinWordCountAction,
	SetHideCompletedAction,
	SetMaxWordCountAction
} from "./interface";
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

export function setMaxWordCount(newMax: number): SetMaxWordCountAction {
	return {
		type: ActionTypes.setMaxWordCount,
		payload: newMax
	};
}

export * from "./interface";

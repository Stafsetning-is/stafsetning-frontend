import {
	OpenFileInPublisherActions,
	AddSplitAction,
	RemoveSplitAction,
	SetEndRangeAction,
	SetStartRangeAction,
} from "./interface";
import { File } from "../../models";
import { ActionTypes } from "../types";

export const openFileInPublisher = (file: File): OpenFileInPublisherActions => {
	return {
		type: ActionTypes.openFileInPublisher,
		payload: file,
	};
};

export const addSplit = (splitAt: number): AddSplitAction => {
	return {
		type: ActionTypes.addSplit,
		payload: splitAt,
	};
};

export const removeSplit = (splitAt: number): RemoveSplitAction => {
	return {
		type: ActionTypes.removeSplit,
		payload: splitAt,
	};
};

export const setEndRange = (value: number): SetEndRangeAction => {
	return {
		type: ActionTypes.setEndRange,
		payload: value,
	};
};

export const setStartRange = (value: number): SetStartRangeAction => {
	return {
		type: ActionTypes.setStartRage,
		payload: value,
	};
};
export * from "./interface";

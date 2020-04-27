import { ActionTypes } from "../types";
import { File } from "../../models";

export interface OpenFileInPublisherActions {
	type: ActionTypes.openFileInPublisher;
	payload: File;
}

export interface AddSplitAction {
	type: ActionTypes.addSplit;
	payload: number;
}

export interface RemoveSplitAction {
	type: ActionTypes.removeSplit;
	payload: number;
}

export interface SetStartRangeAction {
	type: ActionTypes.setStartRage;
	payload: number;
}

export interface SetEndRangeAction {
	type: ActionTypes.setEndRange;
	payload: number;
}

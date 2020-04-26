import { ActionTypes } from "../types";

export interface SetOpenTabAction {
	type: ActionTypes.setOpenTab;
	payload: string;
}

export interface CreateNewFileAction {
	type: ActionTypes.createNewFile;
	payload: null;
}

export interface SetCloseTabAction {
	type: ActionTypes.setCloseTab;
	payload: string;
}

export interface WriteToOpenFileAction {
	type: ActionTypes.writeToOpenFile;
	payload: string;
}

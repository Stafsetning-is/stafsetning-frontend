import { ActionTypes } from "../types";

export interface SetOpenTabAction {
	type: ActionTypes.setOpenTab;
	payload: string;
}

export interface CreateNewFileAction {
	type: ActionTypes.createNewFile;
	payload: null;
}

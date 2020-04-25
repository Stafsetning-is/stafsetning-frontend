import { SetOpenTabAction, CreateNewFileAction } from "./interface";
import { ActionTypes } from "../types";

export function setOpenTab(tabName: string): SetOpenTabAction {
	return {
		type: ActionTypes.setOpenTab,
		payload: tabName,
	};
}

export function createNewFile(): CreateNewFileAction {
	return {
		type: ActionTypes.createNewFile,
		payload: null,
	};
}

export * from "./interface";

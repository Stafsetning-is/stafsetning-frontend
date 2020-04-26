import {
	SetOpenTabAction,
	CreateNewFileAction,
	SetCloseTabAction,
	WriteToOpenFileAction,
} from "./interface";
import { ActionTypes } from "../types";

export function setOpenTab(fileId: string): SetOpenTabAction {
	return {
		type: ActionTypes.setOpenTab,
		payload: fileId,
	};
}

export function createNewFile(): CreateNewFileAction {
	return {
		type: ActionTypes.createNewFile,
		payload: null,
	};
}

export * from "./interface";

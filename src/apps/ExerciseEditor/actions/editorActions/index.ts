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

export function setCloseTab(fileId: string): SetCloseTabAction {
	return {
		type: ActionTypes.setCloseTab,
		payload: fileId,
	};
}

export function writeToOpenFile(text: string): WriteToOpenFileAction {
	return {
		type: ActionTypes.writeToOpenFile,
		payload: text,
	};
}
export * from "./interface";

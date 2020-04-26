import {
	SetOpenTabAction,
	CreateNewFileAction,
	SetCloseTabAction,
	WriteToOpenFileAction,
	OpenEditorAction,
	CloseEditorAction,
	CollapseEditorAction,
	ExpandEditorAction,
	MaximizeEditorAction,
	MinimizeEditorAction,
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

export function openEditor(): OpenEditorAction {
	return {
		type: ActionTypes.openEditor,
		payload: null,
	};
}

export function closeEditor(): CloseEditorAction {
	return {
		type: ActionTypes.closeEditor,
		payload: null,
	};
}

export function expandEditor(): ExpandEditorAction {
	return {
		type: ActionTypes.expandEditor,
		payload: null,
	};
}

export function collapseEditor(): CollapseEditorAction {
	return {
		type: ActionTypes.collapseEditor,
		payload: null,
	};
}

export function minimizeEditor(): MinimizeEditorAction {
	return {
		type: ActionTypes.minimizeEditor,
		payload: null,
	};
}

export function maximizeEditor(): MaximizeEditorAction {
	return {
		type: ActionTypes.maximizeEditor,
		payload: null,
	};
}

export * from "./interface";

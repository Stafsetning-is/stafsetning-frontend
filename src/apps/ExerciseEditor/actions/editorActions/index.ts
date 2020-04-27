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
	OpenExerciseFileAction,
	RenameFileInEditorAction,
	SetErrorMessageAction,
	ClearErrorMessageAction,
} from "./interface";
import { File } from "../../models";

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

export function openExerciseFile(file: File): OpenExerciseFileAction {
	return {
		type: ActionTypes.openExerciseFile,
		payload: file,
	};
}

export function renameFile(newName: string): RenameFileInEditorAction {
	return {
		type: ActionTypes.renameFileInEditor,
		payload: newName,
	};
}

export function clearErrorMessage(): ClearErrorMessageAction {
	return {
		type: ActionTypes.clearErrorMessage,
		payload: null,
	};
}

export function setErrorMessage(message: string): SetErrorMessageAction {
	return {
		type: ActionTypes.setErrorMessage,
		payload: message,
	};
}

export * from "./interface";

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

/**
 * EDITOR ACTIONS
 *
 * actions that change and manipulate the editor state
 *
 */

/**
 * sets a file (by id) as the open tab in editor
 *
 */
export function setOpenTab(fileId: string): SetOpenTabAction {
	return {
		type: ActionTypes.setOpenTab,
		payload: fileId,
	};
}

/**
 * Creates a new file
 */
export function createNewFile(): CreateNewFileAction {
	return {
		type: ActionTypes.createNewFile,
		payload: null,
	};
}

/**
 * closes a file by file id
 * @param fileId the file to close
 */
export function setCloseTab(fileId: string): SetCloseTabAction {
	return {
		type: ActionTypes.setCloseTab,
		payload: fileId,
	};
}

/**
 * writes text into an open file
 * @param text text to write into file
 */
export function writeToOpenFile(text: string): WriteToOpenFileAction {
	return {
		type: ActionTypes.writeToOpenFile,
		payload: text,
	};
}

/**
 * Opens the editor
 */
export function openEditor(): OpenEditorAction {
	return {
		type: ActionTypes.openEditor,
		payload: null,
	};
}

/**
 * closes the editor
 */
export function closeEditor(): CloseEditorAction {
	return {
		type: ActionTypes.closeEditor,
		payload: null,
	};
}

/**
 * Expands the editor
 */
export function expandEditor(): ExpandEditorAction {
	return {
		type: ActionTypes.expandEditor,
		payload: null,
	};
}

/**
 * Collapses the editor
 */
export function collapseEditor(): CollapseEditorAction {
	return {
		type: ActionTypes.collapseEditor,
		payload: null,
	};
}

/**
 * Minimizes the editor
 */
export function minimizeEditor(): MinimizeEditorAction {
	return {
		type: ActionTypes.minimizeEditor,
		payload: null,
	};
}

/**
 * Maximizes the editor
 */
export function maximizeEditor(): MaximizeEditorAction {
	return {
		type: ActionTypes.maximizeEditor,
		payload: null,
	};
}

/**
 * opens an exercise file in the editor
 * @param file file interface
 */
export function openExerciseFile(file: File): OpenExerciseFileAction {
	return {
		type: ActionTypes.openExerciseFile,
		payload: file,
	};
}

/**
 * Renames a file in the editor
 * @param newName the new name for file
 */
export function renameFile(newName: string): RenameFileInEditorAction {
	return {
		type: ActionTypes.renameFileInEditor,
		payload: newName,
	};
}

/**
 * clears any existent error message in editor
 */
export function clearErrorMessage(): ClearErrorMessageAction {
	return {
		type: ActionTypes.clearErrorMessage,
		payload: null,
	};
}

/**
 * Sets an error message for the text editor
 * @param message the string to display
 */
export function setErrorMessage(message: string): SetErrorMessageAction {
	return {
		type: ActionTypes.setErrorMessage,
		payload: message,
	};
}

export * from "./interface";

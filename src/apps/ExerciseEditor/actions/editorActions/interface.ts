import { ActionTypes } from "../types";
import { File } from "../../models";

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

export interface OpenEditorAction {
	type: ActionTypes.openEditor;
	payload: null;
}

export interface CloseEditorAction {
	type: ActionTypes.closeEditor;
	payload: null;
}

export interface ExpandEditorAction {
	type: ActionTypes.expandEditor;
	payload: null;
}

export interface CollapseEditorAction {
	type: ActionTypes.collapseEditor;
	payload: null;
}

export interface MinimizeEditorAction {
	type: ActionTypes.minimizeEditor;
	payload: null;
}

export interface MaximizeEditorAction {
	type: ActionTypes.maximizeEditor;
	payload: null;
}

export interface OpenExerciseFileAction {
	type: ActionTypes.openExerciseFile;
	payload: File;
}

export interface RenameFileInEditorAction {
	type: ActionTypes.renameFileInEditor;
	payload: string;
}

export interface SetErrorMessageAction {
	type: ActionTypes.setErrorMessage;
	payload: string;
}

export interface ClearErrorMessageAction {
	type: ActionTypes.clearErrorMessage;
	payload: null;
}

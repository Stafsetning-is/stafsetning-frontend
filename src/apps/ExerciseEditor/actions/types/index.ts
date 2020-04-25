import * as EditorActions from "../editorActions";

export enum ActionTypes {
	setOpenTab,
	createNewFile,
}

export type Actions =
	| EditorActions.SetOpenTabAction
	| EditorActions.CreateNewFileAction;

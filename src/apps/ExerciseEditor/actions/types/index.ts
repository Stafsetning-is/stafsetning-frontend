import * as EditorActions from "../editorActions";

export enum ActionTypes {
	setOpenTab,
	createNewFile,
	setCloseTab,
	writeToOpenFile,
}

export type Actions =
	| EditorActions.SetOpenTabAction
	| EditorActions.CreateNewFileAction
	| EditorActions.SetCloseTabAction
	| EditorActions.WriteToOpenFileAction;

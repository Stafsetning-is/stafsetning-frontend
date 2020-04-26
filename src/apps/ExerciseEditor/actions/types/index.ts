import * as EditorActions from "../editorActions";

export enum ActionTypes {
	setOpenTab,
	createNewFile,
	setCloseTab,
	writeToOpenFile,
	openEditor,
	closeEditor,
	minimizeEditor,
	maximizeEditor,
	collapseEditor,
	expandEditor,
}

export type Actions =
	| EditorActions.SetOpenTabAction
	| EditorActions.CreateNewFileAction
	| EditorActions.SetCloseTabAction
	| EditorActions.WriteToOpenFileAction
	| EditorActions.OpenEditorAction
	| EditorActions.CloseEditorAction
	| EditorActions.CollapseEditorAction
	| EditorActions.MaximizeEditorAction
	| EditorActions.MinimizeEditorAction
	| EditorActions.ExpandEditorAction;

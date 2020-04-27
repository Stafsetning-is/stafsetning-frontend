import * as EditorActions from "../editorActions";
import * as DesktopActions from "../desktopActions";

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
	fetchFiles,
	openExerciseFile,
	selectSingleFile,
	selectFile,
	renameFileInEditor,
	setErrorMessage,
	clearErrorMessage,
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
	| EditorActions.ExpandEditorAction
	| DesktopActions.FetchFilesAction
	| EditorActions.OpenExerciseFileAction
	| DesktopActions.SelectFileAction
	| DesktopActions.SelectSingleFileAction
	| EditorActions.RenameFileInEditorAction
	| EditorActions.SetErrorMessageAction
	| EditorActions.ClearErrorMessageAction;

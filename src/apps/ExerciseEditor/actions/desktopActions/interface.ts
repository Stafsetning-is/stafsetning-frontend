import { ActionTypes } from "../types";
import { File, ExerciseRepr } from "../../models";

export interface FetchFilesAction {
	type: ActionTypes.fetchFiles;
	payload: File[];
}

export interface SelectSingleFileAction {
	type: ActionTypes.selectSingleFile;
	payload: string;
}

export interface SelectFileAction {
	type: ActionTypes.selectFile;
	payload: string;
}

export interface SaveFileToDesktopAction {
	type: ActionTypes.saveFileToDesktop;
	payload: File;
}

export interface FetchFilesRespnse extends ExerciseRepr {}

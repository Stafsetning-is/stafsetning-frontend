import {
	FetchFilesAction,
	FetchFilesRespnse,
	SelectFileAction,
	SelectSingleFileAction,
	SaveFileToDesktopAction,
} from "./interface";
import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { Api } from "../../../../api";
import { File } from "../../models";

export function fetchFiles() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<FetchFilesRespnse[]>(
				"/api/admin/users/exercises"
			);
			dispatch<FetchFilesAction>({
				type: ActionTypes.fetchFiles,
				payload: data.map((doc) => ({
					...doc,
					text: doc.parts.join(" "),
				})),
			});
		} catch (error) {
			dispatch<FetchFilesAction>({
				type: ActionTypes.fetchFiles,
				payload: [],
			});
		}
	};
}

export function selectFile(fileId: string): SelectFileAction {
	return {
		type: ActionTypes.selectFile,
		payload: fileId,
	};
}

export function selectSingleFile(fileId: string): SelectSingleFileAction {
	return {
		type: ActionTypes.selectSingleFile,
		payload: fileId,
	};
}

export function saveFileToDesktop(file: File): SaveFileToDesktopAction {
	return {
		type: ActionTypes.saveFileToDesktop,
		payload: file,
	};
}

export * from "./interface";

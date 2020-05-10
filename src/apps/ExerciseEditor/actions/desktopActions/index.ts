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

/**
 * DESKTOP ACTIONS
 *
 * these actions all change and maniuplate
 * the desktop reducer state
 */

/**
 * Fetches all files for the said user
 */
export function fetchFiles() {
	// retunrs async action creator
	return async function (dispatch: Dispatch) {
		try {
			// fetches the data
			const { data } = await Api.get<FetchFilesRespnse[]>(
				"/api/admin/users/exercises"
			);
			// dispatches the fetchFiles action
			dispatch<FetchFilesAction>({
				type: ActionTypes.fetchFiles,
				payload: data.map((doc) => ({
					...doc,
					text: doc.parts.join(" "),
				})),
			});
		} catch (error) {
			// remove files if it fails
			dispatch<FetchFilesAction>({
				type: ActionTypes.fetchFiles,
				payload: [],
			});
		}
	};
}

/**
 * Select file by file id
 */
export function selectFile(fileId: string): SelectFileAction {
	return {
		type: ActionTypes.selectFile,
		payload: fileId,
	};
}

/**
 * selects single file by file id
 * @param fileId file id
 */
export function selectSingleFile(fileId: string): SelectSingleFileAction {
	return {
		type: ActionTypes.selectSingleFile,
		payload: fileId,
	};
}

/**
 * saves file by adding it to desktop
 * @param file  file interface
 */
export function saveFileToDesktop(file: File): SaveFileToDesktopAction {
	return {
		type: ActionTypes.saveFileToDesktop,
		payload: file,
	};
}

export * from "./interface";

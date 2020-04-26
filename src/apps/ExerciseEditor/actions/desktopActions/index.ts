import { FetchFilesAction, FetchFilesRespnse } from "./interface";
import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { Api } from "../../../../api";

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

export * from "./interface";

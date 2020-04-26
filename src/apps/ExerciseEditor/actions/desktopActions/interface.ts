import { ActionTypes } from "../types";
import { File } from "../../models";

export interface FetchFilesAction {
	type: ActionTypes.fetchFiles;
	payload: File[];
}

export interface FetchFilesRespnse {
	_id: string;
	difficultRange: {
		min: number;
		max: number;
	};
	published: boolean;
	fileName: string;
	title: string;
	parts: string[];
}

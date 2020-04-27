import { File } from "../../models";
export interface EditorState {
	openTab: string | null;
	openFiles: File[];
	open: boolean;
	minimized: boolean;
	expanded: boolean;
	errorMessage: string;
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

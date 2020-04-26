export interface EditorState {
	openTab: string | null;
	openFiles: BaseDocument[];
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

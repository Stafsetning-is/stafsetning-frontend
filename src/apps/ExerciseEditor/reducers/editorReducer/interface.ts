export interface EditorState {
	openTab: string | null;
	openFiles: BaseDocument[];
	open: boolean;
	minimized: boolean;
	expanded: boolean;
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

export interface DesktopState {
	files: Document[];
	doneFetching: boolean;
}

interface Document {
	fileName: string;
	_id: string;
	text: string;
}

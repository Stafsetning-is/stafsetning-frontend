export interface DesktopState {
	files: Document[];
	doneFetching: boolean;
	selected: string[];
}

interface Document {
	fileName: string;
	_id: string;
	text: string;
}

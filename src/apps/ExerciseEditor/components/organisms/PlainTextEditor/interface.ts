interface BaseProps<T> {
	documents: T[];
}

export interface TextEditorProps<T> extends BaseProps<T> {
	onChange?: (text: string) => void;
	onSave?: (doc: T) => void;
	selected: string | null;
	writeToOpenFile: (input: string) => void;
}

export interface HeaderProps<T> extends BaseProps<T> {
	openTab: string | null;
	setOpenTab: (id: string) => void;
	createNewFile: () => void;
	setCloseTab: (id: string) => void;
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

export type DocMap<T> = { [key: string]: T };

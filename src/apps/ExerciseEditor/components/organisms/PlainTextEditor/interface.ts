export interface TabsProps {
	openTab: string | null;
	setOpenTab: (id: string) => void;
	createNewFile: () => void;
	setCloseTab: (id: string) => void;
	documents: BaseDocument[];
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

export interface EditorProps {
	writeToOpenFile: (text: string) => void;
	openFileText: string;
	noFiles: boolean;
	tabNotSelected: boolean;
}

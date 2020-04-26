import { File } from "../../../models";

export interface TabsProps {
	openTab: string | null;
	setOpenTab: (id: string) => void;
	createNewFile: () => void;
	setCloseTab: (id: string) => void;
	documents: File[];
	closeEditor: () => void;
	minimized: boolean;
	expanded: boolean;
	maximizeEditor: () => void;
	minimizeEditor: () => void;
	collapseEditor: () => void;
	expandEditor: () => void;
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

export interface IProps {
	open: boolean;
	minimized: boolean;
	expanded: boolean;
}

export interface EditorProps {
	writeToOpenFile: (text: string) => void;
	openFileText: string;
	noFiles: boolean;
	tabNotSelected: boolean;
}

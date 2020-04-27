import { File } from "../../../models";
import { RouteComponentProps } from "react-router";

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
	renameFile: (name: string) => void;
}

export interface BaseDocument {
	text: string;
	fileName: string;
	_id: string;
}

export interface IProps extends RouteComponentProps {
	open: boolean;
	minimized: boolean;
	expanded: boolean;
	openFile: File | undefined;
	setErrorMessage: (text: string) => void;
	minimizeEditor: () => void;
	setCloseTab: (fileId: string) => void;
	clearErrorMessage: () => void;
}

export interface EditorProps {
	writeToOpenFile: (text: string) => void;
	openFileText: string;
	noFiles: boolean;
	tabNotSelected: boolean;
}

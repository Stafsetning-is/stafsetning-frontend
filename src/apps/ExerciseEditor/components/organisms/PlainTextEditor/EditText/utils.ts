import { Node } from "slate";
import { BaseDocument } from "../interface";

export const getTextFromNodes = (nodes: Node[]) => {
	return [...[...nodes].shift()?.children].shift().text;
};

export const handleKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement>
): void => {
	console.log("4", 4);
	if (event.key == "Enter") event.preventDefault();
};

export const textToNodes = (text: string) => [
	{
		children: [{ text: text }],
	},
];

export const NO_FILES_OPEN_TEXT =
	"Þú getur ýtt á plúsinn hér fyrir ofan eða valið úr skrám undir ,,þínum æfingum.”";

export const NO_TAB_OPEN_TEXT = "Veldu flipa til þess að vinna með texta";

export const EDITOR_PLACEHOLDER = "Hér getur þú búið til æfingu";

export const getTextFromFile = (file: BaseDocument | null) => {
	if (!file) return textToNodes(EDITOR_PLACEHOLDER);
	return textToNodes(file.text);
};

import { Node } from "slate";
import { BaseDocument } from "../interface";

export const getTextFromNodes = (nodes: Node[]) => {
	return [...[...nodes].shift()?.children].shift().text;
};

export const handleKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement>
): void => {
	if (event.key === "Enter") event.preventDefault();
};

export const textToNodes = (text: string) => [
	{
		children: [{ text: text }],
	},
];

export const NO_FILES_OPEN_TEXT =
	"Smelltu á ,,Búa til æfingu” til að smíða nýja æfingu. Veldu skrá undir ,,mín skjöl” til að breyta æfingu.";

export const NO_TAB_OPEN_TEXT = "Veldu flipa til þess að vinna með texta";

export const EDITOR_PLACEHOLDER = "Smíða nýja æfingu...";

export const getTextFromFile = (file: BaseDocument | null) => {
	if (!file) return textToNodes(EDITOR_PLACEHOLDER);
	return textToNodes(file.text);
};

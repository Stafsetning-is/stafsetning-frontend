import { DocMap, BaseDocument } from "./interface";

export const textToNodeArray = (text: string) => [
	{
		children: [{ text: text }],
	},
];

export const handleKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement>
): void => {
	if (event.key == "Enter") event.preventDefault();
};

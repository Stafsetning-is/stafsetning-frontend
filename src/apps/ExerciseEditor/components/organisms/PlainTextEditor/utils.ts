import { DocMap, BaseDocument } from "./interface";

export const textToNodeArray = (text: string) => [
	{
		children: [{ text: text }],
	},
];

export const mapDocArrayToDocMap = <T extends BaseDocument>(
	docs: T[]
): DocMap<T> => {
	const result: DocMap<T> = {};
	docs.forEach((doc) => {
		result[doc._id] = doc;
	});
	return result;
};

export const handleKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement>
): void => {
	if (event.key == "Enter") event.preventDefault();
};

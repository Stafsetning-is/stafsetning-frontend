export const textToNodeArray = (text: string) => [
	{
		children: [{ text: text }],
	},
];

export const INITIAL_TEXT = "Kalli fór út í búð";

const wordCount = (text: string) => {
	return text.split(" ").length;
};

export const getWordCountString = (text: string) => {
	return `${wordCount(text)} orð`;
};

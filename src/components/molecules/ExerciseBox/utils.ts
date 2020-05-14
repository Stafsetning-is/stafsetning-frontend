import { Report } from "../../../models";

/**
 * get textual representation of best attemt
 * @param bestAttemt decimal number
 */
export const bestPractice = (bestAttemt: number | undefined) => {
	if (!bestAttemt) return "";
	return `Besta tilraun ${Math.round(bestAttemt * 100)}%`;
};

/**
 * takes in the grammar rule item and
 * returns name of most common occurring
 * rule
 * @param report Grammar rule report item
 */
export const reportToRuleString = (report: Report) => {
	const rules = [...Object.keys(report).map((key) => report[key])];
	if (rules.length === 0) return "Blönduð áhersla.";
	rules.sort((a, b) => a.count - b.count);
	const highestFrequency = rules[rules.length - 1]?.count;
	if (!highestFrequency || highestFrequency === 0) return "Blönduð áhersla";
	const mostFrequent = rules.filter(
		(rule) => rule.count === highestFrequency
	);

	return mostFrequent.reduce((prev, curr, index) => {
		if (index === 0) return curr.name;
		else return `${prev}, ${curr.name}`;
	}, "");
};

/**
 * cut's title if it is too long
 */
export const cutTitle = (title: string) => {
	if (title.length < 29) return title;
	else return title.slice(0, 26) + "...";
};

// size of clip loader
export const LOADER_SIZE = 5;

// padding of the loader box
export const LOADER_PADDING = "0px";

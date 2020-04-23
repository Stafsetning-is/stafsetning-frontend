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
	return rules.pop()?.name;
};

/**
 * cut's title if it is too long
 */
export const cutTitle = (title: string) => {
	if (title.length < 29) return title;
	else return title.slice(0, 26) + "...";
};

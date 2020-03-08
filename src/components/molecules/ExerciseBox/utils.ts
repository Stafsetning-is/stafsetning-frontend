/**
 * get textual representation of best attemt
 * @param bestAttemt decimal number
 */
export const bestPractice = (bestAttemt: number | undefined) => {
	if (!bestAttemt) return "";
	return `Besta tilraun ${Math.round(bestAttemt * 100)}%`;
};

export const getPracticeLink = (exerciseId: string) => {
	return `/practice/${exerciseId}`;
};

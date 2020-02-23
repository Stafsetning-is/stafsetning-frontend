/**
 * retuns an array of sentence parts
 * @param id redundant id
 */
export const getExerciseById = (id: string) => {
	return delay([
		"Fiskar hafa synt um heimsins höf",
		"og vötn í meira en",
		"500 milljónir ára.",
		"Fyrstu dýrin, sem hægt var að kalla",
		"þessu nafni, voru þó hvorki með",
		"hreistur, ugga né kjálka",
		"og því mjög frábrugðin",
		"þeim sem við þekkjum til í dag",
		"undir sama heiti.",
		"Áður fyrr hafði þetta hugtak",
		"lika mun víðtækari merkingu."
	]);
};

/**
 * Returns a promise of data
 * that will resolve in 1250ms
 * @param data Data to return after delay
 */
const delay = (data: any) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(data), 1250);
	});
};

/**
 * returns array of string [minutes, seconds]
 * @param dur duration in seconds
 */
export const durationToTime = (dur: number): [string, string] => {
	let min = Math.round(dur / 60).toString();
	let sec = (dur % 60).toString();
	min = min.length === 1 ? `0${min}` : min;
	sec = sec.length === 1 ? `0${sec}` : sec;
	return [min, sec];
};

/***
 * This function uses two other functions, getFeedbackString and errorWord to generate feedback according to the error amount provided.
 */
export const getFeedback = (errorItems: number) => {
	return `${errorItems} ${errorWord(errorItems)}! ${getFeedbackString(
		errorItems
	)}`;
};

/**
 * errorWord determines whether the error is plural or singular. Where all numbers ending in 1 except for 11 is pronounced in the singular form villa
 */
const errorWord = (errorItems: number) => {
	if (errorItems % 10 === 1 && errorItems !== 11) return "villa";
	return "villur";
};
/**
 * getFeedbackString generates the correct feedback and is determined by how many errorItems there are
 * This can be expanded into greater depths analyzing things like what words are being written poorly etc...
 */
const getFeedbackString = (errorItems: number) => {
	if (errorItems === 0) return "Æðislegt! engar villur. Þú ert alveg með þetta";
	else if (errorItems < 2) return "Næstum því fullkomið. Vel Gert!";
	else if (errorItems < 5) return "Vel Gert!";
	else return "Þetta hefði mátt fara betur. Prufaðu aftur...";
};

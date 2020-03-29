/**
 * returns array of string [minutes, seconds]
 * @param dur duration in seconds
 */
export const durationToTime = (dur: number): [string, string] => {
	let min = Math.round(dur / 60).toString();
	let sec = (dur % 60).toString();
	min = min.length == 1 ? `0${min}` : min;
	sec = sec.length == 1 ? `0${sec}` : sec;
	return [min, sec];
};

const SHIFT = "⇧";
const SHIFT_PUNC_MARKS = ["?", "!"];
const ACCENTED_CHARS = ["á", "é", "í", "ú", , "ó", "ý"];
const NORMALIZE_FORM = "NFD";
const EMPTY_STR = "";
const ACCENT = "´";
export const SPACE = " ";

export const getHighlightedKeys = (char: string) => {
	const retArray = [char.toLocaleLowerCase()];
	if (char === SPACE) return retArray;
	else if (char === char.toLocaleUpperCase() || SHIFT_PUNC_MARKS.includes(char))
		retArray.push(SHIFT);
	if (ACCENTED_CHARS.includes(char.toLocaleLowerCase())) retArray.push(ACCENT);
	retArray.push(
		char.normalize(NORMALIZE_FORM).replace(/[\u0300-\u036f]/g, EMPTY_STR)
	);
	return retArray;
};

export const NUM_LINE_CHARS = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"ö",
	"-",
];

export const TOP_LINE_CHARS = [
	"q",
	"w",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"ð",
	"?",
];

export const MID_LINE_CHARS = [
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"æ",
	"´",
];

export const BTM_LINE_CHARS = [
	SHIFT,
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	",",
	".",
	"þ",
	SHIFT,
];

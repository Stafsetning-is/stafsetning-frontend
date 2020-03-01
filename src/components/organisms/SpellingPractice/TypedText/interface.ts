type FontSizeOrNull = FontSize | null;

export type FontSize =
	| "16px"
	| "18px"
	| "20px"
	| "22px"
	| "24px"
	| "26px"
	| "28px"
	| "30px";

export interface FontSelection {
	smaller: FontSizeOrNull;
	larger: FontSizeOrNull;
	current: FontSizeOrNull;
}

export interface IProps {
	typed: string;
	preview: string;
}

export interface IProps {
	onClick?: () => void;
	text: string;
	type: ButtonTypes;
}

export type ButtonTypes = "danger" | "default";

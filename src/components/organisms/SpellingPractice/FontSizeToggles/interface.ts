export interface IProps {
	onClick: () => void;
	type: ToogleType;
	value?: any;
}

export type ToogleType = "inc" | "dec";

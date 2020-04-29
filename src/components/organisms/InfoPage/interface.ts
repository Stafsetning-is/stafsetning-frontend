type InfoType = "success" | "not-found" | "error";

export interface IProps {
	children?: React.ReactNode;
	type: InfoType;
	text: string;
	title: string;
}

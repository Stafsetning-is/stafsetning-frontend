export type FileType = "file" | "app";
export type MenuAction = "select" | "open" | "delete";

export interface IProps {
	type: FileType;
	children: React.ReactNode;
	onClick: () => void;
	onDoubleClick: () => void;
	onRightClick: () => void;
}

export interface MenuItem {
	action: MenuAction;
	text: string;
}

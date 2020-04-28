export type FileType = "file" | "app";
export type MenuAction = "select" | "open" | "delete";

export interface IProps {
	type: FileType;
	children: React.ReactNode;
	onClick: (metkey: boolean) => void;
	onDoubleClick: (metkey: boolean) => void;
	onRightClick: (metkey: boolean) => void;
}

export interface MenuItem {
	action: MenuAction;
	text: string;
}

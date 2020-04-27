export interface IProps {
	name: string;
	selected: boolean;
	onClick: () => void;
	onClose: () => void;
	modified?: boolean;
	onRename: (newName: string) => void;
}

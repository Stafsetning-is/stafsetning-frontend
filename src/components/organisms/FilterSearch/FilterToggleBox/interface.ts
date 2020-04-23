export interface IProps {
	name: string;
	onClick: () => void;
	selected: boolean;
	reloadSelection: () => void;
}

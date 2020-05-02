export interface IProps {
	text: string;
	onClick?: () => void;
	notifications?: number;
	dropDownItems: DropDownItem[];
	to: string;
}

interface DropDownItem {
	label: string;
	to: string;
	onclick?: () => void;
}

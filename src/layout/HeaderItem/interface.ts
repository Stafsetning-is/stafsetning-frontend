import { AuthLevels } from "../../services";

export interface IProps {
	text: string;
	notifications?: number;
	dropDownItems: DropDownItem[];
	to: string;
}

interface DropDownItem {
	label: string;
	to: string;
	onClick?: () => void;
	authLevel: AuthLevels;
	icon: string;
}

import { AuthLevels } from "../../services";

export interface IProps {
	to: string;
	label: string;
	onClick?: () => void;
	authLevel: AuthLevels;
	icon: string;
}

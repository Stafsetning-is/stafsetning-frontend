import { User } from "../../models";
import { AuthLevels } from "../../services";

export interface IProps {
	isAuth: boolean;
	user: User | null;
	userType: AuthLevels;
	setAuthLevel: AuthLevels;
	children: any;
}

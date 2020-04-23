import { User } from "../../models";
import { AuthLevels } from "../../services";

export interface AuthState {
	user: User;
	type: AuthLevels;
}

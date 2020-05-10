import { AuthLevels } from "../../services";

import { User } from "../../models";

export interface IProps {
	children?: any;
	fetchUserFromToken: () => void;
	fetchExercisesSample: () => void;
	fetchExercisesForUser: () => void;
	fetchAdminInviteList: () => void;
	user: User;
}

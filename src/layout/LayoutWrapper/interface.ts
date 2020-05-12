import { AuthLevels } from "../../services";

import { User } from "../../models";

export interface IProps {
    children?: React.ReactNode;
    fetchUserFromToken: () => void;
    fetchExercisesSample: () => void;
    fetchExercisesForUser: () => void;
    fetchAdminInviteList: () => void;
    user: User;
}

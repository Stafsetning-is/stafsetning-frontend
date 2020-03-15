import { AuthLevels } from "../services";

export interface IPage {
	route: string;
	component: any;
}

export interface IProps {
	pages: IPage[];
	modals: IPage[];
}

export interface RoutingProps {
	fetchUserFromToken: () => void;
	fetchExercisesSample: () => void;
	fetchExercisesForUser: () => void;
	userType: AuthLevels;
}

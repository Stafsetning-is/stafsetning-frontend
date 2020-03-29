import React from "react";
import { AuthLevels } from "../../services";

export interface IProps {
	children?: any;
	fetchUserFromToken: () => void;
	fetchExercisesSample: () => void;
	fetchExercisesForUser: () => void;
	userType: AuthLevels;
}

import { FC } from "react";

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
	userType: any;
}

import { ErrorObject } from "../../../../../models";

export interface CachedExercise {
	errorFlag: boolean;
	typed: string;
}

export interface Error extends ErrorObject {}

export interface Report {
	errorItems: Error[];
	exerciseString: string;
	duration: number;
	exercise: string;
}

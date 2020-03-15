import { ErrorObject } from "../../../../../models";

export interface CachedExercise {
	errorFlag: boolean;
	typed: string;
}

export interface Error extends ErrorObject {}

export interface Report {
	errors: Error[];
	exerciseString: string;
	duration: number;
	exercise: string;
}

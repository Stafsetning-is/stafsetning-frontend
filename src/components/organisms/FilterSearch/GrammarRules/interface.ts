import { Exercise, Report as _Report } from "../../../../models";

export interface IProps {
	exercises: Exercise[];
}

export interface GrammarRule {
	count: number;
	name: string;
	id: string;
}

export interface Report extends _Report {}

import { Exercise, Report as _Report } from "../../../../models";

export interface IProps {
	exercises: Exercise[];
	selectedRules: string[];
	addRuleToFilter: (id: string) => void;
}

export interface GrammarRule {
	count: number;
	name: string;
	id: string;
}

export interface Report extends _Report {}

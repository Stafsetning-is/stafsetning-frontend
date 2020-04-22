import {
	SetMinWordCountAction,
	SetHideCompletedAction,
	SetMaxWordCountAction,
	AddRuleToGrammarFilter,
	RemoveGrammarRuleFromFilter,
} from "./interface";
import { ActionTypes } from "../types";

export function setMinWordCount(newMin: number): SetMinWordCountAction {
	return {
		type: ActionTypes.setMinWordCount,
		payload: newMin,
	};
}

export function setHideCompleted(hide: boolean): SetHideCompletedAction {
	return {
		type: ActionTypes.setHideCompleted,
		payload: hide,
	};
}

export function setMaxWordCount(newMax: number): SetMaxWordCountAction {
	return {
		type: ActionTypes.setMaxWordCount,
		payload: newMax,
	};
}

export function addRuleToFilter(newRule: string): AddRuleToGrammarFilter {
	return {
		payload: newRule,
		type: ActionTypes.addGrammarRuleToFilter,
	};
}
export function removeRuleFromFilter(
	rule: string
): RemoveGrammarRuleFromFilter {
	return {
		payload: rule,
		type: ActionTypes.removeGrammarRuleFromFilter,
	};
}

export * from "./interface";

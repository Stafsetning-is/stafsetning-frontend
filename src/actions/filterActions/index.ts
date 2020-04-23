import {
	SetMinWordCountAction,
	SetHideCompletedAction,
	SetMaxWordCountAction,
	AddRuleToGrammarFilterAction,
	RemoveGrammarRuleFromFilterAction,
	SetQuickFilterAction,
} from "./interface";
import { ActionTypes } from "../types";
import { QuickFilter } from "../../services";

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

export function addRuleToFilter(newRule: string): AddRuleToGrammarFilterAction {
	return {
		payload: newRule,
		type: ActionTypes.addGrammarRuleToFilter,
	};
}
export function removeRuleFromFilter(
	rule: string
): RemoveGrammarRuleFromFilterAction {
	return {
		payload: rule,
		type: ActionTypes.removeGrammarRuleFromFilter,
	};
}

export function setQuickFilter(option: QuickFilter): SetQuickFilterAction {
	return {
		payload: option,
		type: ActionTypes.setQuickFilter,
	};
}

export * from "./interface";

import { ActionTypes } from "../types";

export interface SetMinWordCountAction {
	type: ActionTypes.setMinWordCount;
	payload: number;
}

export interface SetHideCompletedAction {
	type: ActionTypes.setHideCompleted;
	payload: boolean;
}

export interface SetMaxWordCountAction {
	type: ActionTypes.setMaxWordCount;
	payload: number;
}

export interface AddRuleToGrammarFilter {
	type: ActionTypes.addGrammarRuleToFilter;
	payload: string;
}

export interface RemoveGrammarRuleFromFilter {
	type: ActionTypes.removeGrammarRuleFromFilter;
	payload: string;
}

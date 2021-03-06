import { ActionTypes } from "../types";
import { QuickFilter } from "../../services";

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

export interface AddRuleToGrammarFilterAction {
	type: ActionTypes.addGrammarRuleToFilter;
	payload: string;
}

export interface RemoveGrammarRuleFromFilterAction {
	type: ActionTypes.removeGrammarRuleFromFilter;
	payload: string;
}

export interface SetQuickFilterAction {
	type: ActionTypes.setQuickFilter;
	payload: QuickFilter;
}

export interface CloseFilterAction {
	type: ActionTypes.closeFilterSideBar;
	payload: null;
}

export interface OpenFilterAction {
	type: ActionTypes.openFilterSideBar;
	payload: null;
}

export interface ClearFilterAction {
	type: ActionTypes.clearFilter;
	payload: null;
}

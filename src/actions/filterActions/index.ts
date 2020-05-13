import {
	SetMinWordCountAction,
	SetHideCompletedAction,
	SetMaxWordCountAction,
	AddRuleToGrammarFilterAction,
	RemoveGrammarRuleFromFilterAction,
	SetQuickFilterAction,
	CloseFilterAction,
	OpenFilterAction,
	ClearFilterAction,
} from "./interface";
import { ActionTypes } from "../types";
import { QuickFilter } from "../../services";

/**
 * FILTER ACTIONS
 *
 * Filter actions are the actions that
 * manipulate the filter reducer of the app state.
 * These control the filtering of exercises for the logged in user
 *
 * these actions are:
 *     - setMinWordCount
 *     - setHideCompleted
 *     - setMaxWordCount
 *     - addRuleToFilter
 *     - removeRuleFromFilter
 *     - setQuickFilter
 *     - closeFilterSideBar
 *     - openFilterSideBar
 */

/**
 * sets the min word count for the filter
 * @param newMin value to be set as minimum word count
 */
export function setMinWordCount(newMin: number): SetMinWordCountAction {
	// returns the action
	return {
		type: ActionTypes.setMinWordCount,
		payload: newMin,
	};
}

/**
 * sets the store state to hide completed to the given value
 * @param hide should it hide (true) or not (false0)
 */
export function setHideCompleted(hide: boolean): SetHideCompletedAction {
	//
	return {
		type: ActionTypes.setHideCompleted,
		payload: hide,
	};
}

/**
 * Sets the max word count in filter state
 * @param newMax the value to be the new maximum
 */
export function setMaxWordCount(newMax: number): SetMaxWordCountAction {
	// returns the action
	return {
		type: ActionTypes.setMaxWordCount,
		payload: newMax,
	};
}

/**
 * Add a grammar rule to filter. These rules have a logical OR union
 * functionality.
 * @param newRule the rule identifier
 */
export function addRuleToFilter(newRule: string): AddRuleToGrammarFilterAction {
	// returns the action
	return {
		payload: newRule,
		type: ActionTypes.addGrammarRuleToFilter,
	};
}

/**
 * removes grammar rule from the filter
 * @param rule the rule to remove
 */
export function removeRuleFromFilter(
	rule: string
): RemoveGrammarRuleFromFilterAction {
	// returns the action
	return {
		payload: rule,
		type: ActionTypes.removeGrammarRuleFromFilter,
	};
}

/**
 * sets a quick filter method to the filter state
 * @param option the QuickFilter type string
 */
export function setQuickFilter(option: QuickFilter): SetQuickFilterAction {
	// returns the action
	return {
		payload: option,
		type: ActionTypes.setQuickFilter,
	};
}

/**
 * sets the filter side bar as closed in
 * the filter store
 */
export function closeFilterSideBar(): CloseFilterAction {
	// returns the action
	return {
		type: ActionTypes.closeFilterSideBar,
		payload: null,
	};
}

/**
 * sets the filter sidebar as open in the
 * filter store
 */
export function openFilterSideBar(): OpenFilterAction {
	// returns the action
	return {
		type: ActionTypes.openFilterSideBar,
		payload: null,
	};
}

/**
 * clears the filter and restores initial state
 */
export function clearFilter(): ClearFilterAction {
	// returns the action
	return {
		type: ActionTypes.clearFilter,
		payload: null,
	};
}

export * from "./interface";

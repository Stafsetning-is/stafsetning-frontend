import { FilterState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: FilterState = {
	minWordCount: 0,
	hideCompleted: false,
	maxWordCount: 1000,
	filterGrammarRule: [],
	quickFilter: "none",
};

export default (
	state: FilterState = initialState,
	action: Actions
): FilterState => {
	switch (action.type) {
		case ActionTypes.setMinWordCount:
			return {
				...state,
				minWordCount: action.payload,
			};
		case ActionTypes.setHideCompleted:
			return {
				...state,
				hideCompleted: action.payload,
			};
		case ActionTypes.setMaxWordCount:
			return {
				...state,
				maxWordCount: action.payload,
			};
		case ActionTypes.addGrammarRuleToFilter:
			return {
				...state,
				filterGrammarRule: [...state.filterGrammarRule, action.payload],
			};
		case ActionTypes.removeGrammarRuleFromFilter:
			const rules = state.filterGrammarRule.filter(
				(rule) => rule !== action.payload
			);
			return {
				...state,
				filterGrammarRule: rules,
			};
		case ActionTypes.setQuickFilter:
			return {
				...state,
				quickFilter: action.payload,
			};
		default:
			return state;
	}
};

export * from "./interface";

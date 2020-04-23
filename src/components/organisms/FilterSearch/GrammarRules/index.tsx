import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";
import { countRules } from "./utils";
import { addRuleToFilter, removeRuleFromFilter } from "../../../../actions";
import FilterToggleBox from "../FilterToggleBox";

/**
 * Component that takes exercises
 * finds out what rules are in those exerecises
 * and then maps them to rule boxes that
 * allow user to hide or unhide exercises
 * with certain grammar rules
 */
const Component = ({
	exercises,
	selectedRules,
	addRuleToFilter,
	removeRuleFromFilter,
}: IProps) => {
	// uses memo and util function to get rules
	const rules = useMemo(() => countRules(exercises), [exercises]);

	// maps rules to JSX
	const ruleJSX = rules.map((rule) => {
		const isSelected = selectedRules.includes(rule.id);
		const clickHandler = isSelected ? removeRuleFromFilter : addRuleToFilter;
		return (
			<FilterToggleBox
				{...rule}
				onClick={() => clickHandler(rule.id)}
				selected={isSelected}
			/>
		);
	});

	// returns the RuleBoxes as JSX in a div
	return <div>{ruleJSX}</div>;
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
	selectedRules: state.filter.filterGrammarRule,
});

export default connect(mapStateToProps, {
	addRuleToFilter,
	removeRuleFromFilter,
})(Component);

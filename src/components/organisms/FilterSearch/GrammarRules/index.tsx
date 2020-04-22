import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";
import { countRules } from "./utils";
import { addRuleToFilter, removeRuleFromFilter } from "../../../../actions";
import RuleBox from "./RuleBox";

const Component = ({
	exercises,
	selectedRules,
	addRuleToFilter,
	removeRuleFromFilter,
}: IProps) => {
	const rules = useMemo(() => countRules(exercises), [exercises]);
	return (
		<div>
			{rules.map((rule) => {
				const isSelected = selectedRules.includes(rule.id);
				return (
					<RuleBox
						{...rule}
						onClick={(id) => {
							if (isSelected) removeRuleFromFilter(id);
							else addRuleToFilter(id);
						}}
						selected={isSelected}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
	selectedRules: state.filter.filterGrammarRule,
});

export default connect(mapStateToProps, {
	addRuleToFilter,
	removeRuleFromFilter,
})(Component);

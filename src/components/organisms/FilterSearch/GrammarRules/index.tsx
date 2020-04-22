import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";
import { countRules } from "./utils";
import { addRuleToFilter } from "../../../../actions";
import RuleBox from "./RuleBox";

const Component = ({ exercises, selectedRules, addRuleToFilter }: IProps) => {
	const rules = useMemo(() => countRules(exercises), [exercises]);
	return (
		<div>
			{rules.map((rule) => (
				<RuleBox
					{...rule}
					onClick={(id) => addRuleToFilter(id)}
					selected={selectedRules.includes(rule.id)}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
	selectedRules: state.filter.filterGrammarRule,
});

export default connect(mapStateToProps, { addRuleToFilter })(Component);

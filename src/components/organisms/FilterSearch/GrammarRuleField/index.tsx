import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps, GrammarRule } from "./interface";
import { StoreState } from "../../../../reducers";

const Component = ({ exercises }: IProps) => {
	const rules = useMemo(() => {
		const rules = exercises.reduce<GrammarRule[]>((prev, { report }) => {
			const rules = Object.keys(report).map((key) => ({
				...report[key],
				id: key,
			}));
			return [...prev, ...rules];
		}, []);
		const ruleObject: { [key: string]: GrammarRule } = {};
		rules.forEach((rule) => {
			if (!ruleObject[rule.id]) {
				ruleObject[rule.id] = rule;
				return;
			}
			ruleObject[rule.id].count++;
		});
		return Object.keys(ruleObject).map((key) => ruleObject[key]);
	}, [exercises]);
	return <div>{JSON.stringify(rules)}</div>;
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
});

export default connect(mapStateToProps)(Component);

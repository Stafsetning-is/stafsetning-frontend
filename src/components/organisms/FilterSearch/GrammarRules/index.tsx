import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";
import { countRules } from "./utils";
import RuleBox from "./RuleBox";

const Component = ({ exercises }: IProps) => {
	const rules = useMemo(() => countRules(exercises), [exercises]);
	return (
		<div>
			{rules.map((rule) => (
				<RuleBox {...rule} onClick={(id) => {}} />
			))}
		</div>
	);
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
});

export default connect(mapStateToProps)(Component);

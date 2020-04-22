import React, { useMemo } from "react";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";
import { countRules } from "./utils";

const Component = ({ exercises }: IProps) => {
	const rules = useMemo(() => countRules(exercises), [exercises]);
	return <div>{JSON.stringify(rules)}</div>;
};

const mapStateToProps = (state: StoreState) => ({
	exercises: state.exercises.selection,
});

export default connect(mapStateToProps)(Component);

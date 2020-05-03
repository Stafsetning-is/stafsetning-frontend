import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";

const Component = ({ min, max, children, userLevel }: IProps) => {
	if (userLevel < min || userLevel > max) return null;
	return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state: StoreState) => ({
	userLevel: state.auth.user.difficulty,
});

export const DifficultyHider = connect(mapStateToProps)(Component);

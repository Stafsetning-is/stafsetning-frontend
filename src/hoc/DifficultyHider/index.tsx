import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";

/**
 * Higher order component that
 * takes in a children node and
 * an min and max value denoting min and max difficulty
 *
 * if signed in user falls out of the min max range
 * then the item is not shown
 */
const Component = ({ min, max, children, userLevel }: IProps) => {
	if (userLevel < min || userLevel > max) return null;
	return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state: StoreState) => ({
	userLevel: state.auth.user.difficulty,
});

export const DifficultyHider = connect(mapStateToProps)(Component);

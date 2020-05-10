import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { Redirect } from "react-router-dom";

/**
 * wrapper that only displays children
 * if user is logged in, rediirects to
 * /log-in otherwise
 */
const Component = ({ children, isAuth }: IProps) => {
	if (isAuth) return <React.Fragment>{children}</React.Fragment>;
	return <Redirect to="/log-in" />;
};

const mapStateToProps = (state: StoreState) => ({
	isAuth: state.auth.type !== "guest",
});

export const ProtectPageWrapper = connect(mapStateToProps)(Component);

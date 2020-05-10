import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { NavLink } from "react-router-dom";

/**
 * Navlink that protects links from being
 * accessable if the user is not logged in
 */
const Component = ({ children, isAuth, service, to }: IProps) => {
	// link is either the to (link) from props
	// or a log in screen if the user is not authenticated
	const link = isAuth
		? to
		: `/${document.location.pathname}/${service}`.replace(/\/+/g, "/");

	// returns navlink with either the to props or the signin link
	return <NavLink to={link}>{children}</NavLink>;
};

const mapStateToProps = (state: StoreState) => ({
	isAuth: state.auth.type !== "guest",
});

export const ProtectedNavLink = connect(mapStateToProps)(Component);

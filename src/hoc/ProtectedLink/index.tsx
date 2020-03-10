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
	const link = isAuth
		? to
		: `${document.location.pathname}/${service}`.replace("//", "/");
	return <NavLink to={link}>{children}</NavLink>;
};

const mapStateToProps = (state: StoreState) => ({
	isAuth: state.auth.type !== "guest"
});

export const ProtectedNavLink = connect(mapStateToProps)(Component);

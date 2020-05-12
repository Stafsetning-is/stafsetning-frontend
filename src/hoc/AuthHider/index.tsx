import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";
import { NOT_AUTH_TYPES } from "./utils";
/**
 * Wrapper that takes in setAuthLevel prop and decides if
 * component should be rendered or "hidden"
 */

const Component = ({ userType, isAuth, setAuthLevel, children }: IProps) => {
	// declares should show and assigns as false
	let shouldShow = false;

	switch (setAuthLevel) {
		case "guest":
			shouldShow = !isAuth;
			break;
		case "user":
			shouldShow = isAuth;
			break;
		case "admin":
			shouldShow = userType === "admin";
			break;
		default:
			shouldShow = false;
	}

	if (shouldShow) return <React.Fragment>{children}</React.Fragment>;
	else return null;
};

const mapStateToProps = (state: StoreState) => ({
	isAuth: !NOT_AUTH_TYPES.includes(state.auth.type),
	user: state.auth.user,
	userType: state.auth.type,
});

export const AuthHider = connect(mapStateToProps)(Component);

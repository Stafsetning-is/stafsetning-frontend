import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

/**
 * Wrapper that takes in setAuthLevel prop and decides if
 * component should be rendered or "hidden"
 */

const Component = ({ userType, isAuth, setAuthLevel, children }: IProps) => {
	const shouldShow =
		(!isAuth && setAuthLevel === "guest") ||
		(isAuth && setAuthLevel === "user") ||
		(setAuthLevel === "admin" && setAuthLevel === userType);

	if (shouldShow) return children;
	else return null;
};

const mapStateToProps = (state: StoreState) => ({
	isAuth: state.auth.type !== "guest",
	user: state.auth.user,
	userType: state.auth.type
});

export const AuthHider = connect(mapStateToProps)(Component);

import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { loginForm } from "./formRecipe";
import { getSignupUrl, clearLoginUrl } from "./utils";
import { Redirect } from "react-router";
import { LogInRes, IProps } from "./interface";
import { setAuthCookie } from "../../../services";
import { connect } from "react-redux";
import { logInUser } from "../../../actions";

/**
 * The modal that displays login form
 */

const Component = ({ logInUser }: IProps) => {
	const [redirectURL, setRedirectURL] = useState<string>();
	if (redirectURL) return <Redirect to={redirectURL} />;
	return (
		<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
			<FormGenerator<LogInRes>
				fields={loginForm}
				label="Innskrá"
				onSuccess={({ token, user }) => {
					setAuthCookie(token);
					logInUser(user);
					setRedirectURL("/");
				}}
				postTo="/api/auth/log_in"
			>
				<BasicButton
					text={"Nýskráning"}
					onClick={() => setRedirectURL(getSignupUrl())}
					type="secondary"
				/>
			</FormGenerator>
		</Modal>
	);
};
export const LoginModal = connect(null, { logInUser })(Component);

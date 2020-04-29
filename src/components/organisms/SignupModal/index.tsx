import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { signupForm } from "./formRecipe";
import { getLoginUrl, clearLoginUrl } from "./utils";
import { Redirect } from "react-router";
import { SignupRes, IProps } from "./interface";
import { setAuthCookie } from "../../../services";
import { connect } from "react-redux";
import { logInUser } from "../../../actions";

const Component = ({ logInUser }: IProps) => {
	const [redirectURL, setRedirectURL] = useState<string>();
	const [showForm, setShowForm] = useState(false);

	if (redirectURL) return <Redirect to={redirectURL} />;
	if (!showForm)
		return (
			<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
				<BasicButton
					text={"Ég er nemandi"}
					onClick={() => setShowForm(true)}
					type="default"
				/>
				<BasicButton
					text={"Ég er Kennari"}
					onClick={() => setRedirectURL("/user/create-admin-account/")}
					type="secondary"
				/>
			</Modal>
		);
	return (
		<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
			<FormGenerator<SignupRes>
				fields={signupForm}
				label="Skrá inn"
				onSuccess={({ token, user }) => {
					setAuthCookie(token);
					logInUser(user);
					setRedirectURL("/");
				}}
				postTo="/api/auth/sign_up"
			>
				<BasicButton
					text={"Til baka"}
					onClick={() => setRedirectURL(getLoginUrl())}
					type="secondary"
				/>
			</FormGenerator>
		</Modal>
	);
};

export const SignupModal = connect(null, { logInUser })(Component);

import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { loginForm } from "./formRecipe";
import { getSignupUrl, clearLoginUrl } from "./utils";
import { Redirect } from "react-router";
export const LoginModal = () => {
	const [redirectURL, setRedirectURL] = useState<string>();

	if (redirectURL) return <Redirect to={redirectURL} />;
	return (
		<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
			<FormGenerator fields={loginForm} label="Skrá inn" />
			<BasicButton
				text={"Búa til aðgang"}
				onClick={() => setRedirectURL(getSignupUrl())}
				type="secondary"
			/>
		</Modal>
	);
};
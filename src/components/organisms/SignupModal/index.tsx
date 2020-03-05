import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { signupForm } from "./formRecipe";
import { getLoginUrl, clearLoginUrl } from "./utils";
import { Redirect } from "react-router";
export const SignupModal = () => {
	const [redirectURL, setRedirectURL] = useState<string>();

	if (redirectURL) return <Redirect to={redirectURL} />;
	return (
		<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
			<FormGenerator fields={signupForm} label="Skrá inn" />
			<BasicButton
				text={"Til baka"}
				onClick={() => setRedirectURL(getLoginUrl())}
				type="secondary"
			/>
		</Modal>
	);
};

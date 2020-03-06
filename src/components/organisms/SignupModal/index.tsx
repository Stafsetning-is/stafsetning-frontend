import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../..";
import { signupForm } from "./formRecipe";
import { getLoginUrl, clearLoginUrl } from "./utils";
import { Redirect } from "react-router";

/**
 * The modal that displays login form
 *
 * TODO:
 *     [ ] add onsuccess method
 *     [ ] add postTo route
 */
export const SignupModal = () => {
	const [redirectURL, setRedirectURL] = useState<string>();

	if (redirectURL) return <Redirect to={redirectURL} />;
	return (
		<Modal onBackgroundClick={() => setRedirectURL(clearLoginUrl())}>
			<FormGenerator
				fields={signupForm}
				label="Skrá inn"
				onSuccess={() => {}}
				postTo=""
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

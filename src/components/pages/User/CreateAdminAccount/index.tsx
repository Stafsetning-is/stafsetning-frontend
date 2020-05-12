import React, { useState } from "react";
import { Outer } from "./styles";
import { signupForm } from "./formRecipe";
import { FormGenerator, InfoBox } from "../../../";
import { logInUser } from "../../../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupRes } from "./interface";
import { setAuthCookie } from "../../../../services";
import { IProps } from "./interface";

const Page = ({ logInUser }: IProps) => {
	const [redirectUrl, setRedirectURL] = useState("");

	if (redirectUrl) return <Redirect to={redirectUrl} />;
	return (
		<Outer>
			<InfoBox>
				Hér getur þú búið til kennaraaðgang. Aðgangurinn verður að vera
				samþykktur af öðrum kennara til að þú fáir réttindi. Á meðan
				getur þú skoðað síðuna sem nemandi.
			</InfoBox>
			<FormGenerator<SignupRes>
				fields={signupForm}
				label="Innskráning"
				onSuccess={({ token, user }) => {
					setRedirectURL("/");
					setAuthCookie(token);
					logInUser(user);
				}}
				postTo="/api/auth/sign_up"
			/>
		</Outer>
	);
};

export default connect(null, { logInUser })(Page);

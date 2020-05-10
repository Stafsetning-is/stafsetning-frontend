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
				Hér getur þú búið til kennara aðgang. Þegar aðgangurinn verður
				til þá skráist þú sem nemandi. Um leið þá fá aðrir kennarar
				tilkynningu um að þú hafir beðið um kennara aðgang. Um leið og
				annar kennari samþykkir þig inn í kerfið þá getur þú búið til
				æfingar
			</InfoBox>
			<FormGenerator<SignupRes>
				fields={signupForm}
				label="Skrá inn"
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

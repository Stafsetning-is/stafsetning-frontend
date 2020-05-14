import React, { useState } from "react";
import { LiveForm, AccessibilitySettings, FormGenerator } from "../../";
import { changeDifficultyForm, changePasswordForm } from "./formRecipe";
import {
	Outer,
	PasswordTitle,
	SuccessContainer,
	SuccessInner,
	ChangeBackSpan,
} from "./styles";
import { connect } from "react-redux";
import { IProps, DifficultyForm } from "./interface";
import { changeUserDifficulty, signOut } from "../../../actions";
import { StoreState } from "../../../reducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * SettingsPage component holds the settings page
 * for each user. It holds the difficulty change,
 * password change and the accessibility settings.
 * It stores the difficulty changes in a redux store.
 */
const Component = ({ changeUserDifficulty, difficulty, signOut }: IProps) => {
	const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);

	const handlePasswordSuccess = () => setChangePasswordSuccess(true);
	const handleShowPasswordForm = () => setChangePasswordSuccess(false);

	return (
		<Outer>
			<LiveForm<DifficultyForm>
				fields={changeDifficultyForm}
				postTo="/api/v1/users/difficulty"
				onSuccess={({ difficulty }) => {
					changeUserDifficulty(difficulty);
				}}
				label="Námsstig"
				defaultValues={{ difficulty }}
			/>
			<PasswordTitle>Breyta lykilorði</PasswordTitle>

			{changePasswordSuccess ? (
				<SuccessContainer>
					<SuccessInner>
						<FontAwesomeIcon icon={faCheckCircle} />
						Breyting tókst!{" "}
						<ChangeBackSpan onClick={handleShowPasswordForm}>
							breyta aftur
						</ChangeBackSpan>
					</SuccessInner>
				</SuccessContainer>
			) : (
				<FormGenerator
					fields={changePasswordForm}
					label="Breyta lykilorði"
					onSuccess={handlePasswordSuccess}
					postTo="/api/v1/users/password"
				/>
			)}

			<AccessibilitySettings label="Stillingar í æfingu" />
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const SettingsPage = connect(mapStateToProps, {
	changeUserDifficulty,
	signOut,
})(Component);

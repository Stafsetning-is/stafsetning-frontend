import React from "react";
import { LiveForm } from "../../";
import { changeDifficultyForm, changeUserPreferenceForm } from "./formRecipe";
import { Outer } from "./styles";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps, DifficultyForm } from "./interface";
import { UserPreference } from "../../../models";
import { changeUserPreferences, changeUserDifficulty } from "../../../actions";

const Component = ({
	preferences,
	changeUserPreferences,
	changeUserDifficulty,
	difficulty,
}: IProps) => {
	return (
		<Outer>
			<LiveForm<DifficultyForm>
				fields={changeDifficultyForm}
				postTo="/api/v1/users/difficulty"
				onSuccess={({ difficulty }) => {
					changeUserDifficulty(difficulty);
				}}
				label="Erfðleikastig"
				defaultValues={{ difficulty }}
			/>
			<LiveForm<UserPreference>
				fields={changeUserPreferenceForm}
				postTo="/api/v1/users/preferences"
				onSuccess={(data) => changeUserPreferences(data)}
				label="Aðgengisstillingar"
				defaultValues={preferences}
			/>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const SettingsPage = connect(mapStateToProps, {
	changeUserPreferences,
	changeUserDifficulty,
})(Component);

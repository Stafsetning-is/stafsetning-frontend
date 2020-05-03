import React from "react";
import { LiveForm, AccessibilitySettings } from "../../";
import { changeDifficultyForm } from "./formRecipe";
import { Outer } from "./styles";
import { connect } from "react-redux";
import { IProps, DifficultyForm } from "./interface";
import { changeUserDifficulty } from "../../../actions";
import { StoreState } from "../../../reducers";

const Component = ({ changeUserDifficulty, difficulty }: IProps) => {
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
			<AccessibilitySettings label="Aðgengisstillingar" />
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const SettingsPage = connect(mapStateToProps, {
	changeUserDifficulty,
})(Component);

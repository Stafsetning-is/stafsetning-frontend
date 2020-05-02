import React from "react";
import { LiveForm } from "../../";
import { changeDifficultyForm, changeUserPreferenceForm } from "./formRecipe";
import { Outer } from "./styles";

export const SettingsPage = () => {
	return (
		<Outer>
			<LiveForm<any>
				fields={changeDifficultyForm}
				postTo="/api/v1/users/difficulty"
				onSuccess={({ difficulty }) => {}}
			/>
			<LiveForm<any>
				fields={changeUserPreferenceForm}
				postTo="/api/v1/users/preferences"
				onSuccess={({ difficulty }) => {}}
			/>
		</Outer>
	);
};

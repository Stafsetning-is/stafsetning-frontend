import React, { useState } from "react";
import { LiveForm, AccessibilitySettings, FormGenerator } from "../../";
import {} from "../../";
import { changeDifficultyForm, changePasswordForm } from "./formRecipe";
import { Outer, PasswordTitle } from "./styles";
import { connect } from "react-redux";
import { IProps, DifficultyForm } from "./interface";
import { changeUserDifficulty } from "../../../actions";
import { StoreState } from "../../../reducers";

/**
 * SettingsPage component holds the settings page
 * for each user. It holds the difficulty change,
 * password change and the accessibility settings.
 * It stores the difficulty changes in a redux store.
 */
const Component = ({ changeUserDifficulty, difficulty }: IProps) => {
    return (
        <Outer>
            <LiveForm<DifficultyForm>
                fields={changeDifficultyForm}
                postTo="/api/v1/users/difficulty"
                onSuccess={({ difficulty }) => {
                    changeUserDifficulty(difficulty);
                }}
                label="Erfiðleikastig"
                defaultValues={{ difficulty }}
            />
            <PasswordTitle>Breyta um Lykilorð</PasswordTitle>
            <FormGenerator
                fields={changePasswordForm}
                label="Breyta um lykilorð"
                onSuccess={({}) => {}}
                postTo="/api/v1/users/password"
            />

            <AccessibilitySettings label="Aðgengisstillingar" />
        </Outer>
    );
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const SettingsPage = connect(mapStateToProps, {
    changeUserDifficulty
})(Component);

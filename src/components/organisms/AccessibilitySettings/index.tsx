import React from "react";
import { IProps } from "./interface";
import { UserPreference } from "../../../models";
import { changeUserPreferenceForm } from "./formRecipe";
import { LiveForm } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { changeUserPreferences } from "../../../actions";
/**
 * AccessibilitySettings component used by each user,
 * uses the LiveForm component to automatically update the
 * choices made by the user, posts the changes to the backend
 * and keeps the changes in a redux state.
 */
const Component = ({ preferences, changeUserPreferences, label }: IProps) => {
    return (
        <LiveForm<UserPreference>
            fields={changeUserPreferenceForm}
            postTo="/api/v1/users/preferences"
            onSuccess={(data) => changeUserPreferences(data)}
            label={label}
            defaultValues={preferences}
        />
    );
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const AccessibilitySettings = connect(mapStateToProps, {
    changeUserPreferences
})(Component);

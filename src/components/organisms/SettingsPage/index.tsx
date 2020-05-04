import React, { useState } from "react";
import { LiveForm, AccessibilitySettings } from "../../";
import {} from "../../";
import { changeDifficultyForm } from "./formRecipe";
import { Outer } from "./styles";
import { connect } from "react-redux";
import { IProps, DifficultyForm } from "./interface";
import { changeUserDifficulty } from "../../../actions";
import { StoreState } from "../../../reducers";
import { PasswordInput } from "../../atoms";
import { Form } from "../FormGenerator/styles";
import { Api } from "../../../api";

const Component = ({ changeUserDifficulty, difficulty }: IProps) => {
    const [password, setPassword] = useState("");
    // const [newpassword, setNewPassword] = useState("");

    const handleChange = (value: any) => {
        setPassword(value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        Api.post<string>("/api/v1/users/password", password);
    };
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
            <form onSubmit={handleSubmit}>
                <PasswordInput
                    type="password-input"
                    label="Breyta lykilorði"
                    value=""
                    onChange={handleChange}
                    placeholder="Lykilorð hér"
                />
            </form>
            <div>hello</div>
            <AccessibilitySettings label="Aðgengisstillingar" />
        </Outer>
    );
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const SettingsPage = connect(mapStateToProps, {
    changeUserDifficulty,
})(Component);

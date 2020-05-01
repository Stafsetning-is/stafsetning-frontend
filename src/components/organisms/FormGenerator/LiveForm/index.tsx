import React, { useState, Fragment } from "react";
import { InputFactory } from "../../..";
import { LayoutWrapper } from "../../../../layout";
import { TopErrorLabel, Form } from "../styles";
import { InputElementContainer, Feedback } from "./styles";
import {
    getLiveInputElementsArray,
    validateErrors,
    getUserData
} from "../utils";
import { IProps } from "./interface";
import { handlePost } from "../utils";
import { LiveInputObject } from "../../../../services";
/* import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";
import { changeDifficulty } from "../../../../actions"; */

export const LiveForm = <T extends {}>({
    fields,
    postTo,
    onSuccess
}: IProps<T>) => {
    const [formObject, setFormObject] = useState(fields);
    const [errorMessage, setErrorMessage] = useState("");
    const inputElements = getLiveInputElementsArray(formObject);

    // const handleChange = async (key: keyof typeof fields, val: any) => {
    //     console.log("val as a param:", val);
    //     val = 1;
    //     console.log("val is now:", val);
    //     const formObjectCopy = { ...formObject };
    //     const formElementCopy = { ...formObjectCopy[key] };
    //     formElementCopy.value = val;
    //     console.log("formElementCopy:", formElementCopy);
    //     formElementCopy.modified = true;
    //     formObjectCopy[key] = formElementCopy;
    //     setFormObject({ ...formObjectCopy });
    //     setTimeout(handleChangeElementsToNotModified, 1000);
    //     console.log(formObject);
    // validateErrors(formObject);
    // const data = await handlePost<T>(formObject, postTo);
    // onSuccess(data);
    // };

    const handleChange = (key: keyof typeof fields, val: any) => {
        const formObjectCopy = { ...formObject };
        for (const key in formObjectCopy) {
            const formElementCopy = { ...formObjectCopy[key] };
            formElementCopy.value = val;
            formElementCopy.modified = true;
            formObjectCopy[key] = formElementCopy;
        }
        setFormObject({ ...formObjectCopy });
        postDifficulty(formObjectCopy);
    };

    const postDifficulty = async (formObject: LiveInputObject) => {
        validateErrors(formObject);
        const data = await handlePost<T>(formObject, postTo);
        console.log(data);
        onSuccess(data);
    };

    return (
        <Fragment>
            <TopErrorLabel>{errorMessage}</TopErrorLabel>
            <Form onSubmit={(e) => e.preventDefault()}>
                {inputElements.map((element) => (
                    <InputElementContainer>
                        <Feedback>{element.modified ? "🤔" : "✅"}</Feedback>
                        <InputFactory
                            {...element}
                            onChange={(val) => handleChange(element.key, val)}
                        />
                    </InputElementContainer>
                ))}
            </Form>
        </Fragment>
    );
};
/* 
const mapStateToProps = (store: StoreState) => ({
    difficulty: store.userProfile.difficulty
});

connect(mapStateToProps, {})(LiveForm);
 */

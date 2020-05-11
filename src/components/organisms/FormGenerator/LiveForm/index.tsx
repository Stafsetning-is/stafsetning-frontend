import React, { useState } from "react";
import { InputFactory } from "../../..";
import {
    InputElementOuter,
    Outer,
    Title,
    InputerElementInner,
    Inner
} from "./styles";
import { Api } from "../../../../api";
import { getLiveInputElementsArray, applyDefaultValues } from "../utils";
import { IProps } from "./interface";
import { LiveInputObject } from "../../../../services";

export const LiveForm = <T extends {}>({
    fields,
    postTo,
    label,
    onSuccess,
    defaultValues
}: IProps<T>) => {
    const [formObject, setFormObject] = useState(
        applyDefaultValues(fields, defaultValues)
    );

    const inputElements = getLiveInputElementsArray(formObject);
    /**
     * Handles the change of the liveform
     * changes the modified value to true
     * @param key properties and methods belonging to the type which fields is
     * @param val the new value of the form
     */
    const handleChange = (key: keyof typeof fields, val: any) => {
        const formObjectCopy = { ...formObject };
        const formElementCopy = { ...formObjectCopy[key] };
        formElementCopy.value = val;
        formElementCopy.modified = true;
        formObjectCopy[key] = formElementCopy;
        setFormObject({ ...formObjectCopy });
        postDifficulty(formObjectCopy);
    };

    /**
     * Adjusts the modified boolean with new values
     * and posts the value to the API.
     * Catches an error if there is one.
     * @param form the object that is subject to change
     */
    const postDifficulty = async (form: LiveInputObject) => {
        const modified = getLiveInputElementsArray(form).filter(
            (item) => item.modified
        );
        if (!modified.length) return;
        const values: { [key: string]: any } = {};
        modified.forEach((item) => {
            values[item.key] = item.value;
        });
        try {
            const { data } = await Api.post(postTo, values);
            onSuccess(data);
        } catch (error) {
            // error sending request
        }
    };

    return (
        <Outer>
            <Title>{label}</Title>
            <Inner>
                {inputElements.map((element) => (
                    <InputElementOuter>
                        <InputerElementInner>
                            <InputFactory
                                {...element}
                                onChange={(val) =>
                                    handleChange(element.key, val)
                                }
                            />
                        </InputerElementInner>
                    </InputElementOuter>
                ))}
            </Inner>
        </Outer>
    );
};

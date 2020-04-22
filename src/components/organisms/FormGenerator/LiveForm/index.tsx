import React, { useState } from "react";
import { InputFactory } from "../../..";
import { LayoutWrapper } from "../../../../layout";
import { TopErrorLabel, Form } from "../styles";
import { InputElementContainer } from "./styles";
import { getLiveInputElementsArray } from "../utils";
import { IProps } from "./interface";
import { ProtectPageWrapper } from "../../../../hoc";

export const LiveForm = <T extends {}>({
    fields,
    postTo,
    onSuccess,
}: IProps<T>) => {
    const [formObject, setFormObject] = useState(fields);
    const [errorMessage, setErrorMessage] = useState("");
    const inputElements = getLiveInputElementsArray(formObject);

    const handleChange = (key: keyof typeof fields, val: any) => {
        const formObjectCopy = { ...formObject };
        const formElementCopy = { ...formObjectCopy[key] };
        formElementCopy.value = val;
        formElementCopy.modified = true;
        formObjectCopy[key] = formElementCopy;
        setFormObject({ ...formObjectCopy });
        setTimeout(handleChangeElementsToNotModified, 1000);
    };

    const handleChangeElementsToNotModified = () => {
        const formObjectCopy = { ...formObject };
        for (const key in formObjectCopy) {
            const formElementCopy = { ...formObjectCopy[key] };
            formElementCopy.modified = false;
            formObjectCopy[key] = formElementCopy;
        }
        setFormObject({ ...formObjectCopy });
    };

    return (
        <ProtectPageWrapper>
            <LayoutWrapper>
                <TopErrorLabel>{errorMessage}</TopErrorLabel>
                <Form onSubmit={(e) => e.preventDefault()}>
                    {inputElements.map((element) => (
                        <InputElementContainer>
                            <span>{element.modified ? "🤔" : "✅"}</span>
                            <InputFactory
                                {...element}
                                onChange={(val) =>
                                    handleChange(element.key, val)
                                }
                            />
                        </InputElementContainer>
                    ))}
                </Form>
            </LayoutWrapper>
        </ProtectPageWrapper>
    );
};

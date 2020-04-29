import React, { useState } from "react";
import { InputFactory } from "../../..";
import { LayoutWrapper } from "../../../../layout";
import { TopErrorLabel, Form } from "../styles";
import { InputElementContainer, Feedback } from "./styles";
import { getLiveInputElementsArray } from "../utils";
import { IProps } from "./interface";

export const LiveForm = <T extends {}>({
    fields,
    postTo,
    onSuccess
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
        //<LayoutWrapper> // Fyrir utan hérna er LayoutWrapper bara notaður í /src/routing/index.tsx
        //                   þar sem hann er notaður utan um route-in svo hann renderist bara einu sinni
        //                   (þegar síðan er hlaðin í fyrsta skipti) og sé sem header utan um allt saman.
        //                   Þegar hann er tekinn út og React Fragment sett í staðinn lagast útlitið.
        <React.Fragment>
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
                {inputElements.map((element) => (
                    <InputElementContainer>
                        <InputFactory
                            {...element}
                            onChange={(val) => handleChange(element.key, val)}
                        />
                    </InputElementContainer>
                ))}
            </Form>
        </React.Fragment>
        //</LayoutWrapper>
    );
};

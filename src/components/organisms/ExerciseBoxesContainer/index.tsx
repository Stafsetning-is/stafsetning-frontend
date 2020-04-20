import React from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";

export const ExerciseBoxesContainer = ({ exercises }: IProps) => {
    return (
        <Container>
            <LoaderBox loading={exercises.length === 0}>
                {exercises.map((itm) => (
                    <ExerciseBox {...itm} />
                ))}
            </LoaderBox>
        </Container>
    );
};

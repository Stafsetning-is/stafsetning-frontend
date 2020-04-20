import React from "react";
import { BoxWrap } from "../../";
import { IProps } from "./interface";
import {
    Button,
    InfoBox,
    TitleText,
    SecondaryTitle,
    Container,
    InfoContainer,
    BestPracticeTitle,
    CompletedInfo,
} from "./styles";
import { bestPractice, getPracticeLink, isCompleted } from "./utils";
import { ProtectedNavLink } from "../../../hoc";

/**
 * Displays exercise in a box that
 * can be used in a grid of exercises
 */
export const ExerciseBox = ({
    title,
    bestAttempt,
    _id,
    difficultRange: { min, max },
    wordCount,
    completed,
}: IProps) => {
    return (
        <BoxWrap padding="0px">
            <Container>
                <InfoContainer>
                    <InfoBox>
                        <TitleText>{title}</TitleText>
                        <SecondaryTitle>
                            {wordCount} orð • {min}-{max} bekkur
                        </SecondaryTitle>
                        <SecondaryTitle>ng nk • hv kv </SecondaryTitle>
                        <BestPracticeTitle>
                            {bestPractice(bestAttempt)}
                        </BestPracticeTitle>
                        <CompletedInfo>{isCompleted(completed)}</CompletedInfo>
                    </InfoBox>
                </InfoContainer>
                <ProtectedNavLink to={getPracticeLink(_id)} service="log-in">
                    <Button>Opna</Button>
                </ProtectedNavLink>
            </Container>
        </BoxWrap>
    );
};

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
	BestPracticeTitle
} from "./styles";
import { bestPractice, getPracticeLink } from "./utils";
import { NavLink } from "react-router-dom";

export const ExerciseBox = ({ title, bestAttempt, exerciseId }: IProps) => {
	return (
		<BoxWrap padding="0px">
			<Container>
				<InfoContainer>
					<InfoBox>
						<TitleText>{title}</TitleText>
						<SecondaryTitle>156 orð • 4-6 bekkur</SecondaryTitle>
						<SecondaryTitle>ng nk • hv kv</SecondaryTitle>
						<BestPracticeTitle>{bestPractice(bestAttempt)}</BestPracticeTitle>
					</InfoBox>
				</InfoContainer>
				<NavLink to={getPracticeLink(exerciseId)}>
					<Button>Opna</Button>
				</NavLink>
			</Container>
		</BoxWrap>
	);
};

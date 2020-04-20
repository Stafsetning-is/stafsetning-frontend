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
} from "./styles";
import { bestPractice } from "./utils";
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
	practice,
	completed,
}: IProps) => {
	/**
	 * Props for ExerciseBox Component represents
	 * the exercise model object interface. If a practice
	 * Id is included in props then we want the OPEN button
	 * to redirect the user to the /completed/:practiceId url.
	 * How ever if the practice Id is not supplied in props
	 * then we know that the OPEN button should open
	 * the exercise for the user via the
	 * /exercise/:exerciseId url
	 */
	const link = practice ? `/completed/${practice}` : `/exercise/${_id}`;

	return (
		<BoxWrap padding="0px">
			<Container>
				<InfoContainer>
					<InfoBox>
						<TitleText>{title}</TitleText>
						<SecondaryTitle>
							{wordCount} orð • {min}-{max} bekkur
						</SecondaryTitle>
						<SecondaryTitle>ng nk • hv kv</SecondaryTitle>
						<BestPracticeTitle>{bestPractice(bestAttempt)}</BestPracticeTitle>
					</InfoBox>
				</InfoContainer>
				<ProtectedNavLink to={link} service="log-in">
					<Button>Opna</Button>
				</ProtectedNavLink>
			</Container>
		</BoxWrap>
	);
};

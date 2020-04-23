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
	TopLine,
} from "./styles";
import { bestPractice, reportToRuleString } from "./utils";
import { ProtectedNavLink } from "../../../hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Displays exercise in a box that
 * can be used in a grid of exercises
 */
export const ExerciseBox = ({
	title,
	_id,
	difficultRange: { min, max },
	wordCount,
	practice,
	score,
	report,
	saved,
}: IProps) => {
	/**
	 * Props for ExerciseBox Component represents
	 * the exercise model object interface. If a practice
	 * Id is included in props then we want the OPEN button
	 * to redirect the user to the /completed/:practiceId url.
	 * However if the practice Id is not supplied in props
	 * then we know that the OPEN button should open
	 * the exercise for the user via the
	 * /exercise/:exerciseId url
	 */
	const link = practice ? `/completed/${practice}` : `/exercise/${_id}`;
	const ruleString = reportToRuleString(report);
	const scoreString = score
		? `Besta hingað til: ${Math.round(score * 100)}%`
		: "";
	const buttonString = practice ? "Skoða einkunn" : "Opna";

	return (
		<BoxWrap padding="0px">
			<Container>
				<InfoContainer>
					<InfoBox>
						<TopLine>
							<TitleText>{title}</TitleText>
							<FontAwesomeIcon icon={faStar} />
						</TopLine>
						<SecondaryTitle>
							{wordCount} orð • {min}-{max} bekkur
						</SecondaryTitle>
						<SecondaryTitle>{ruleString}</SecondaryTitle>
						<BestPracticeTitle>{scoreString}</BestPracticeTitle>
					</InfoBox>
				</InfoContainer>
				<ProtectedNavLink to={link} service="log-in">
					<Button>{buttonString}</Button>
				</ProtectedNavLink>
			</Container>
		</BoxWrap>
	);
};

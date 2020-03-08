import React from "react";
import { IProps } from "./interface";
import {
	TopBar,
	TitleText,
	TitleElement,
	SecondaryTitle,
	OverviewContainer,
	SuggestionTitle
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import TryTable from "./TryTable";
import Stats from "./StatsAggregate";

export const PracticeFinished = ({}: IProps) => {
	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>Kalli for ut i bud. Ng og nk</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>29 februar 2020</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<p>Vel gert! Æfingin skapar meistarann</p>
			</TopBar>
			<OverviewContainer>
				<TryTable />
				<Stats />
			</OverviewContainer>
			<SuggestionTitle>Haltu áfram að æfa þig!</SuggestionTitle>
			<ExerciseBoxesContainer exercises={tmpArr} />
		</React.Fragment>
	);
};

const tmpArr = [
	{
		title: "Kalli for i bud",
		completed: true,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: []
	},
	{
		title: "Kalli for i bud",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: []
	},
	{
		title: "Kalli for i bud",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: []
	}
];

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
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";

const Component = ({ nextUp }: IProps) => {
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
			<ExerciseBoxesContainer exercises={nextUp} />
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	nextUp: state.exercises.selection
});

export const PracticeFinished = connect(mapStateToProps)(Component);

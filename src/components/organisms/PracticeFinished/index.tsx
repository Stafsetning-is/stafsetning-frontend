import React from "react";
import { IProps } from "./interface";
import {
	TopBar,
	TitleText,
	TitleElement,
	SecondaryTitle,
	OverviewContainer,
	SuggestionTitle,
	Outer,
	ErrorCount,
	TimeText
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import TryTable from "./TryTable";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";

const Component = ({ nextUp, exercise: { title }, errorItems }: IProps) => {
	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>{title}</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>29 februar 2020</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<p>Vel gert! Æfingin skapar meistarann</p>
			</TopBar>
			<OverviewContainer>
				<TryTable />
				<Outer>
					<ErrorCount>Þú gerðir {errorItems.length} Villur</ErrorCount>
					<TimeText>Tíminn þinn var 1:29</TimeText>
				</Outer>
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

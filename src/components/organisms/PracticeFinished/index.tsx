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
	TimeText,
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import PracticeText from "./PracticeText";
import Moment from "moment";
import "moment/locale/is";
const Component = ({
	nextUp,
	exercise: { title },
	errorItems,
	createdAt,
	exerciseString,
}: IProps) => {
	Moment.locale("is");
	const test = Moment(createdAt).fromNow();
	console.log(errorItems);
	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>{title}</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>{test}</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<p>Vel gert! Æfingin skapar meistarann</p>
			</TopBar>
			<OverviewContainer>
				<Outer>
					<ErrorCount>Þú gerðir {errorItems.length} Villur</ErrorCount>
				</Outer>
			</OverviewContainer>
			<PracticeText exerciseString={exerciseString} errors={errorItems} />
			<SuggestionTitle>Haltu áfram að æfa þig!</SuggestionTitle>
			<ExerciseBoxesContainer exercises={nextUp} />
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	nextUp: state.exercises.selection,
});

export const PracticeFinished = connect(mapStateToProps)(Component);

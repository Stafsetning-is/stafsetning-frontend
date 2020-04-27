import React, { useEffect } from "react";
import { IProps } from "./interface";
import {
	TopBar,
	TitleText,
	TitleElement,
	SecondaryTitle,
	PositiveElement,
	OverviewContainer,
	SuggestionTitle,
	Outer,
	ErrorCount,
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import Moment from "moment";
import "moment/locale/is";
import PracticeText from "./PracticeText";
import { getFeedback } from "./utils";
import { Api } from "../../../api";

const Component = ({
	nextUp,
	exercise: { title },
	errorItems,
	duration, //should remove this!
	createdAt,
	exerciseString,
}: IProps) => {
	// const [mm, ss] = durationToTime(duration);
	Moment.locale('is');
	const test = Moment(createdAt).fromNow();

	useEffect(() => {
		Api.get
	}, [])

	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>{title}</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>{test}</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<PositiveElement>Æfingin skapar meistarann</PositiveElement>
			</TopBar>
			<OverviewContainer>
				<Outer>
					<ErrorCount>{getFeedback(errorItems.length)}</ErrorCount>
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

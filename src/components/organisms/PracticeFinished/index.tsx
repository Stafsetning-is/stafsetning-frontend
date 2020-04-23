import React from 'react';
import { IProps } from './interface';
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
	feedBack,
	PositiveElement,
} from './styles';
import { ExerciseBoxesContainer } from '../../';
import { connect } from 'react-redux';
import { StoreState } from '../../../reducers';
import Moment from 'moment';
import 'moment/locale/is';
import PracticeText from './PracticeText';
import FeedBack from './FeedBack';
import { getFeedback } from './FeedBack/utils';
const Component = ({
	nextUp,
	exercise: { title },
	errorItems,
	duration, //should remove this!
	createdAt,
	exerciseString,
	proverbText = 'æfingin skapar meistarann!',
}: IProps) => {
	// const [mm, ss] = durationToTime(duration);
	Moment.locale('is');
	const test = Moment(createdAt).fromNow();

	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>{title}</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>{test}</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<PositiveElement>{proverbText}</PositiveElement>
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

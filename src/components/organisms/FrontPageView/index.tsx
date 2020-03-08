import React from "react";
import { ExerciseBoxesContainer, FilterSearch } from "../../";
import { filterExercises } from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps } from "./interface";

/**
 * View that renders all components
 * that should display on front page
 */
const View = ({ filterSettings }: IProps) => {
	const exercises = filterExercises(tmpArr, filterSettings);

	return (
		<React.Fragment>
			<FilterSearch />
			<ExerciseBoxesContainer exercises={exercises} />
		</React.Fragment>
	);
};

const mapStateToProps = (store: StoreState) => ({
	filterSettings: store.filter
});

export const FrontPageView = connect(mapStateToProps)(View);

const tmpArr = [
	{
		title: "Kalli for i bud",
		completed: true,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 60
	},
	{
		title: "Kalli for i apotekid",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 75
	},
	{
		title: "sjonni for i sund",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 112
	},
	{
		title: "stina for i kirkju",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 143
	},
	{
		title: "palli for i disko",
		completed: true,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 88
	},
	{
		title: "kjartan for a bulluna",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 102
	},
	{
		title: "doddi for a sjo",
		completed: true,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 85
	},
	{
		title: "alex drap kottinn",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 23
	},
	{
		title: "Mamma klaeddi strakinn",
		completed: false,
		bestAttempt: 0.17,
		exerciseId: "21234",
		sentenceParts: [],
		textLength: 100
	}
];

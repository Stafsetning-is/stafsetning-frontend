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

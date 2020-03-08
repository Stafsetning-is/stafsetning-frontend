import React from "react";
import { ExerciseBoxesContainer, FilterSearch } from "../../";
import { filterExercises } from "./utils";
import { connect } from "react-redux";
export const FrontPageView = () => {
	const exercises = filterExercises(tmpArr, {
		minWordCount: 0,
		hideCompleted: true
	});

	return (
		<React.Fragment>
			<FilterSearch />
			<ExerciseBoxesContainer exercises={exercises} />
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

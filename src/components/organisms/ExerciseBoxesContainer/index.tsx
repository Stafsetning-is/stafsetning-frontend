import React from "react";
import { ExerciseBox } from "../../";
import { Container } from "./styles";
export const ExerciseBoxesContainer = () => {
	return (
		<Container>
			{tmpArr.map((itm) => (
				<ExerciseBox {...itm} />
			))}
		</Container>
	);
};

const tmpArr = [
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	},
	{
		title: "Kalli for i bud",
		finished: true,
		bestAttempt: 0.17,
		exerciseId: "21234"
	}
];

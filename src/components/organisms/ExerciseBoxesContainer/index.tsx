import React from "react";
import { ExerciseBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";
export const ExerciseBoxesContainer = ({ exercises }: IProps) => {
	return (
		<Container>
			{exercises.map((itm) => (
				<ExerciseBox {...itm} />
			))}
		</Container>
	);
};

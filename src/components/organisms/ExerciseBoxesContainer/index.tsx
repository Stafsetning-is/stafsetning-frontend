import React from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";

export const ExerciseBoxesContainer = ({ exercises }: IProps) => {
	return (
		<LoaderBox loading={exercises.length === 0}>
			<Container>
				{exercises.map((itm) => (
					<ExerciseBox {...itm} />
				))}
			</Container>
		</LoaderBox>
	);
};

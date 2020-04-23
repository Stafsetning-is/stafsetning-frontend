import React from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";

export const ExerciseBoxesContainer = ({ exercises, limit }: IProps) => {
	const sliceAt = limit ?? exercises.length;

	return (
		<LoaderBox loading={exercises.length === 0}>
			<Container>
				{exercises.slice(0, sliceAt).map((itm) => (
					<ExerciseBox {...itm} />
				))}
			</Container>
		</LoaderBox>
	);
};

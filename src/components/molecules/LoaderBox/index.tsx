import React from "react";
import { Loader } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";

export const LoaderBox = ({ loading, height }: IProps) => {
	return (
		<Container
			theme={{
				height: height
			}}
		>
			<Loader loading={loading} />
		</Container>
	);
};

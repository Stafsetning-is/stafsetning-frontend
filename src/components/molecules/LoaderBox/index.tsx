import React from "react";
import { Loader } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";

/**
 * Loader box that can be toogled on and off
 * with boolean loading variable
 * height can be adjusted
 * fills into its width 100%
 *
 */
export const LoaderBox = ({ loading, height, children }: IProps) => {
	if (loading)
		return (
			<Container
				theme={{
					height: height
				}}
			>
				<Loader loading={true} />
			</Container>
		);
	return children;
};

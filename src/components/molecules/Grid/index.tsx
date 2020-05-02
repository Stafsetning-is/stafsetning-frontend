import React from "react";
import { IProps } from "./interface";
import { InfoPage } from "../../";
import { Container } from "./styles";
import { TEXT, TITLE } from "./utils";

export const Grid = ({ children, isEmpty, itemsInRow }: IProps) => {
	if (isEmpty)
		return (
			<InfoPage type="not-found" title={TITLE} text={TEXT}>
				{null}
			</InfoPage>
		);
	return <Container theme={{ itemsInRow }}>{children}</Container>;
};

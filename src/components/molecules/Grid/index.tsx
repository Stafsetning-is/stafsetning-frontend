import React from "react";
import { IProps } from "./interface";
import { InfoPage } from "../../";
import { Container } from "./styles";
import { TEXT, TITLE } from "./utils";

/**
 * Reusable grid component that takes prop children,
 * isEmpty and itemsInRow
 *
 * children are mapped in a grid according to the
 * itemsInRow number.
 *
 * the isEmpty boolean prop allows for a way of
 * showing an info screen in stead of no children
 *
 */
export const Grid = ({ children, isEmpty, itemsInRow }: IProps) => {
	if (isEmpty)
		return (
			<InfoPage type="not-found" title={TITLE} text={TEXT}>
				{null}
			</InfoPage>
		);
	return <Container theme={{ itemsInRow }}>{children}</Container>;
};

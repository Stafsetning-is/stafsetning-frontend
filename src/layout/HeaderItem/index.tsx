import * as React from "react";
import { Outer, NotificationBubble } from "./styles";
import { IProps } from "./interface";

/**
 * Single header item
 */
export default ({ onClick, text, notifications }: IProps) => {
	onClick = onClick ? onClick : () => {};
	return (
		<Outer onClick={onClick}>
			{notifications ? (
				<NotificationBubble>{notifications}</NotificationBubble>
			) : null}

			{text}
		</Outer>
	);
};

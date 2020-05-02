import * as React from "react";
import {
	Outer,
	NotificationBubble,
	DropDownContainer,
	DropDownItem,
} from "./styles";
import { IProps } from "./interface";
import { NavLink } from "react-router-dom";

/**
 * Single header item
 */
export default ({
	onClick,
	text,
	notifications,
	dropDownItems,
	to,
}: IProps) => {
	onClick = onClick ? onClick : () => {};
	const hasDropDown = dropDownItems.length > 0;

	return (
		<Outer onClick={onClick}>
			{notifications ? (
				<NotificationBubble>{notifications}</NotificationBubble>
			) : null}
			<NavLink to={to}>{text}</NavLink>

			{hasDropDown ? (
				<DropDownContainer>
					{dropDownItems.map((item) => (
						<NavLink to={item.to}>
							<DropDownItem onClick={item.onclick}>{item.label}</DropDownItem>
						</NavLink>
					))}
				</DropDownContainer>
			) : null}
		</Outer>
	);
};

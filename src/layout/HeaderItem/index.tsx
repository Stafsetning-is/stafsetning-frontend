import * as React from "react";
import { Outer, NotificationBubble, DropDownContainer } from "./styles";
import { IProps } from "./interface";
import { NavLink } from "react-router-dom";
import DropDownItem from "../DropDownItem";
/**
 * Single header item
 */
export default ({ text, notifications, dropDownItems, to }: IProps) => {
	const hasDropDown = dropDownItems.length > 0;
	return (
		<Outer>
			{notifications ? (
				<NotificationBubble>{notifications}</NotificationBubble>
			) : null}
			<NavLink to={to}>{text}</NavLink>

			{hasDropDown ? (
				<DropDownContainer>
					{dropDownItems.map((item) => (
						<DropDownItem {...item} />
					))}
				</DropDownContainer>
			) : null}
		</Outer>
	);
};

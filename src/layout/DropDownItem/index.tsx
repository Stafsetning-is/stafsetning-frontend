import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { NavLink } from "react-router-dom";
import { AuthHider } from "../../hoc";
export default (props: IProps) => {
	const onClick = props.onClick ? props.onClick : () => {};
	return (
		<AuthHider setAuthLevel={props.authLevel}>
			<NavLink to={props.to}>
				<Outer {...props}>{props.label}</Outer>
			</NavLink>
		</AuthHider>
	);
};

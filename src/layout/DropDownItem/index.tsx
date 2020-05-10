import React from "react";
import { IProps } from "./interface";
import { Outer, Text, Icon } from "./styles";
import { NavLink } from "react-router-dom";
import { AuthHider } from "../../hoc";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Single drop down item which is only
 * and should only be used
 * in the HeaderItem component
 */
export default (props: IProps) => {
	const { to, label, authLevel, icon } = props;
	// @ts-ignore due to bad declerations in external module
	const iconProp = fa[icon] ? fa[icon] : null;
	return (
		<AuthHider setAuthLevel={authLevel}>
			<NavLink to={to}>
				<Outer {...props}>
					<Icon>
						<FontAwesomeIcon icon={iconProp} />
					</Icon>
					<Text>{label}</Text>
				</Outer>
			</NavLink>
		</AuthHider>
	);
};

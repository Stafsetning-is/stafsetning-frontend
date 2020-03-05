import React from "react";
import { Container, FlexHeader, Image } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import CenterBlock from "../CenterBlock";
import HeaderItem from "../HeaderItem";
import { urlWithoutPath } from "./utils";
/**
 * Header component for layout
 */
export default () => {
	return (
		<Container>
			<CenterBlock>
				<FlexHeader>
					<NavLink to="/">
						<Image src={Logo} />
					</NavLink>
					<NavLink to={`${urlWithoutPath()}log-in`}>
						<HeaderItem text="Skrá inn" />
					</NavLink>
				</FlexHeader>
			</CenterBlock>
		</Container>
	);
};

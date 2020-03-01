import React from "react";
import { Container, FlexHeader, Image } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import CenterBlock from "../CenterBlock";
import HeaderItem from "../HeaderItem";

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
					<div>
						<HeaderItem text="Skrá inn" onClick={() => {}} />
					</div>
				</FlexHeader>
			</CenterBlock>
		</Container>
	);
};

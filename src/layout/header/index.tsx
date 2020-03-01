import React from "react";
import { Container, FlexHeader, Image } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import CenterBlock from "../CenterBlock";
import HeaderItem from "../HeaderItem";
import { openAuthModal } from "../../actions";
import { connect } from "react-redux";

/**
 * Header component for layout
 */
const Header = ({ openAuthModal }: any) => {
	return (
		<Container>
			<CenterBlock>
				<FlexHeader>
					<NavLink to="/">
						<Image src={Logo} />
					</NavLink>
					<div>
						<HeaderItem text="Skrá inn" onClick={openAuthModal} />
					</div>
				</FlexHeader>
			</CenterBlock>
		</Container>
	);
};

export default connect(null, { openAuthModal })(Header);

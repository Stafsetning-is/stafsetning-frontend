import React from "react";
import { Container, FlexHeader, Image, ImageCog, RightSide } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import Cog from "../../static/images/cog-icon.png";
import CenterBlock from "../CenterBlock";
import HeaderItem from "../HeaderItem";
import { urlWithoutPath } from "./utils";
import { AuthHider } from "../../hoc/";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../reducers";
import { signOut } from "../../actions";
/**
 * Header component for layout
 */
const Header = ({ user, signOut }: IProps) => {
    return (
        <Container>
            <CenterBlock>
                <FlexHeader>
                    <NavLink to="/">
                        <Image src={Logo} />
                    </NavLink>
                    <RightSide>
                        <AuthHider setAuthLevel="guest">
                            <NavLink to={`${urlWithoutPath()}sign-up`}>
                                <HeaderItem text="Búa til aðgang" />
                            </NavLink>
                        </AuthHider>
                        <AuthHider setAuthLevel="guest">
                            <NavLink to={`${urlWithoutPath()}log-in`}>
                                <HeaderItem text="Skrá inn" />
                            </NavLink>
                        </AuthHider>
                        <AuthHider setAuthLevel="admin">
                            <NavLink to={`${urlWithoutPath()}log-in`}>
                                <HeaderItem text="Búa til æfingu" />
                            </NavLink>
                        </AuthHider>
                        <AuthHider setAuthLevel="user">
                            <NavLink to={`/user/profile`}>
                                <HeaderItem text={user.name} />
                            </NavLink>
                        </AuthHider>
                        <AuthHider setAuthLevel="user">
                            <NavLink to={"/"}>
                                <HeaderItem text="Skrá út" onClick={signOut} />
                            </NavLink>
                        </AuthHider>

                        <AuthHider setAuthLevel="user">
                            <NavLink to="/user/settings">
                                <ImageCog src={Cog} />
                            </NavLink>
                        </AuthHider>
                    </RightSide>
                </FlexHeader>
            </CenterBlock>
        </Container>
    );
};

const mapStateToProps = ({ auth: { user } }: StoreState) => ({
    user,
});

export default connect(mapStateToProps, { signOut })(Header);

import React from "react";
import { Container, FlexHeader, Image, ImageCog, RightSide } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../static/images/logo.png";
import CenterBlock from "../CenterBlock";
import HeaderItem from "../HeaderItem";
import { urlWithoutPath } from "./utils";
import { AuthHider } from "../../hoc/";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../reducers";
import { signOut } from "../../actions";
import { Points } from "../../components";
/**
 * Header component for layout
 */
const Header = ({ user, signOut, pendingInvitesCount }: IProps) => {
    return (
        <Container>
            <CenterBlock>
                <FlexHeader>
                    <NavLink to="/">
                        <Image src={Logo} />
                    </NavLink>
                    <RightSide>
                        <HeaderItem
                            to={`${urlWithoutPath()}`}
                            text={"Um okkur"}
                            dropDownItems={[]}
                        />
                        <AuthHider setAuthLevel="guest">
                            <HeaderItem
                                text="Búa til aðgang"
                                dropDownItems={[]}
                                to={`${urlWithoutPath()}sign-up`}
                            />
                        </AuthHider>
                        <AuthHider setAuthLevel="guest">
                            <HeaderItem
                                to={`${urlWithoutPath()}log-in`}
                                text="Skrá inn"
                                dropDownItems={[]}
                            />
                        </AuthHider>
                        <AuthHider setAuthLevel="admin">
                            <HeaderItem
                                to="/user/pending-admin-invites/"
                                text="Nýir kennarar"
                                notifications={pendingInvitesCount}
                                dropDownItems={[]}
                            />
                        </AuthHider>
                        <AuthHider setAuthLevel="user">
                            <Points points={user.points} />
                        </AuthHider>
                        <AuthHider setAuthLevel="user">
                            <HeaderItem
                                to="/user/profile"
                                text={user.name}
                                dropDownItems={[
                                    {
                                        label: "Minn prófíll",
                                        to: "/user/profile/",
                                        authLevel: "user",
                                        icon: "faUserCircle"
                                    },
                                    {
                                        label: "Mín skjöl",
                                        to: "/app/exercise-editor/",
                                        authLevel: "admin",
                                        icon: "faFolderOpen"
                                    },
                                    {
                                        label: "Stillingar",
                                        to: "/user/settings",
                                        authLevel: "user",
                                        icon: "faSlidersH"
                                    },
                                    {
                                        label: "Skrá út",
                                        onClick: signOut,
                                        to: "/",
                                        authLevel: "user",
                                        icon: "faSignOutAlt"
                                    }
                                ]}
                            />
                        </AuthHider>
                    </RightSide>
                </FlexHeader>
            </CenterBlock>
        </Container>
    );
};

const mapStateToProps = ({
    auth: { user, pendingAdminInvite }
}: StoreState) => ({
    user,
    pendingInvitesCount: pendingAdminInvite.length
});

export default connect(mapStateToProps, { signOut })(Header);

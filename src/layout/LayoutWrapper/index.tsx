import React, { useEffect } from "react";
import { IProps } from "./interface";
import Header from "../Header";
import BackDrop from "../Backdrop";
import CenterBlock from "../CenterBlock";
import {
    fetchUserFromToken,
    fetchExercisesSample,
    fetchExercisesForUser,
    fetchAdminInviteList
} from "../../actions";
import { StoreState } from "../../reducers";
import { LoaderBox, PickGender } from "../../components";
import { connect } from "react-redux";
import { SIGNED_IN_USER_LEVELS, GUEST, ADMIN } from "./utils";
import { CookieBanner } from "../../components";
import CookieConsent from "react-cookie-consent";
import { IconWrapper } from "../../components/molecules/CookieBanner/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const Component = ({
    children,
    fetchExercisesForUser,
    fetchExercisesSample,
    fetchUserFromToken,
    fetchAdminInviteList,
    user
}: IProps) => {
    /**
     * Fetches info about logged in
     * user on start
     */
    useEffect(() => {
        fetchUserFromToken();
    }, [fetchUserFromToken]);

    /**
     * Fetches exercises for front page
     * when ever the user type changes
     */
    useEffect(() => {
        if (user.type === GUEST) fetchExercisesSample();
        else if (SIGNED_IN_USER_LEVELS.includes(user.type))
            fetchExercisesForUser();
    }, [
        user._id,
        fetchExercisesSample,
        fetchExercisesForUser,
        user.difficulty
    ]);

    /**
     * fetches list of pending users
     * for admin priveledges
     */
    useEffect(() => {
        if (user.type === ADMIN) fetchAdminInviteList();
    }, [user.type]);

    const userPickedGender = user.gender && user.gender !== "loading";

    return (
        <BackDrop>
            <Header />
            <CenterBlock>
                <LoaderBox loading={user.type === "unknown"}>
                    {userPickedGender ? children : <PickGender />}
                </LoaderBox>
            </CenterBlock>
            <CookieConsent
                buttonText="Samþykkja"
                buttonStyle={{
                    height: "45px",
                    backgroundColor: "#e8e8e8",
                    color: "#4e4e4e",
                    border: "#666 2px solid",
                    fontSize: "16px",
                    outline: "none"
                }}
                contentStyle={{ flex: "0 0 600px", margin: "0 auto" }}
                style={{
                    height: "100px",
                    opacity: "0.8",
                    backgroundColor: "#51cd76",
                    alignItems: "center",
                    color: "black"
                }}
            >
                <IconWrapper
                    style={{ position: "fixed", left: "70px", bottom: "20px" }}
                >
                    <FontAwesomeIcon icon={faCookieBite} />
                </IconWrapper>
                Við notum kökur á síðunni til að bæta notendaupplifun þína.
                Fyrir yfirlit yfir hvað við notum kökur fyrir, smelltu{" "}
                <a
                    style={{ color: "#0000ee", textDecoration: "underline" }}
                    href="/cookies"
                >
                    hér.
                </a>
            </CookieConsent>
        </BackDrop>
    );
};

const mapStateToProps = (state: StoreState) => ({
    user: state.auth.user
});

export const LayoutWrapper = connect(mapStateToProps, {
    fetchUserFromToken,
    fetchExercisesSample,
    fetchExercisesForUser,
    fetchAdminInviteList
})(Component);

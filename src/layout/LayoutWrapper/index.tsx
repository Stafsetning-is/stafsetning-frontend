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

/**
 * Wraps a page with layout elements like header and other things
 *
 * It also serves as a guard to show loading animation
 * while app has not decided if the user should be logged in or not
 *
 * LayoutWrapper also calls async actions when the user
 * changes to fetch data from backend for the user
 */
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
     * whenever the user type changes
     */
    useEffect(() => {
        if (user.type === GUEST) fetchExercisesSample();
        else if (SIGNED_IN_USER_LEVELS.includes(user.type))
            fetchExercisesForUser();
    }, [
        user._id,
        fetchExercisesSample,
        fetchExercisesForUser,
        user.difficulty,
        user.type
    ]);

    /**
     * fetches list of pending users
     * for admin priveledges
     */
    useEffect(() => {
        if (user.type === ADMIN) fetchAdminInviteList();
    }, [user.type, fetchAdminInviteList]);

    const userPickedGender = user.gender && user.gender !== "loading";

    return (
        <BackDrop>
            <Header />
            <CenterBlock>
                <LoaderBox loading={user.type === "unknown"}>
                    {userPickedGender ? children : <PickGender />}
                </LoaderBox>
            </CenterBlock>
            <CookieBanner />
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

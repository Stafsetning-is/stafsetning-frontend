import React, { useEffect } from "react";
import { IProps } from "./interface";
import Header from "../Header";
import BackDrop from "../Backdrop";
import CenterBlock from "../CenterBlock";
import {
    fetchUserFromToken,
    fetchExercisesSample,
    fetchExercisesForUser,
    fetchAdminInviteList,
} from "../../actions";
import { StoreState } from "../../reducers";
import { LoaderBox } from "../../components";
import { connect } from "react-redux";
import { SIGNED_IN_USER_LEVELS, GUEST, ADMIN } from "./utils";

const Component = ({
	children,
	userType,
	fetchExercisesForUser,
	fetchExercisesSample,
	fetchUserFromToken,
	fetchAdminInviteList,
	userId,
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
		if (userType === GUEST) fetchExercisesSample();
		else if (SIGNED_IN_USER_LEVELS.includes(userType)) fetchExercisesForUser();
	}, [userType, fetchExercisesSample, fetchExercisesForUser]);

	/**
	 * fetches list of pending users
	 * for admin priveledges
	 */
	useEffect(() => {
		if (userType === ADMIN) fetchAdminInviteList();
	}, [userType]);

    return (
        <BackDrop>
            <Header />
            <CenterBlock>
                <LoaderBox loading={userType === "unknown"}>
                    {children}
                </LoaderBox>
            </CenterBlock>
        </BackDrop>
    );
};

const mapStateToProps = (state: StoreState) => ({
<<<<<<< HEAD
    userType: state.auth.type,
=======
	userType: state.auth.type,
	userId: state.auth.user._id,
>>>>>>> 3a2ccdbdfb9aa351a86b4eb7d91c0155a4b2d276
});

export const LayoutWrapper = connect(mapStateToProps, {
    fetchUserFromToken,
    fetchExercisesSample,
    fetchExercisesForUser,
    fetchAdminInviteList,
})(Component);

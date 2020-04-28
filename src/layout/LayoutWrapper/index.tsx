import React, { useEffect } from "react";
import { IProps } from "./interface";
import Header from "../Header";
import BackDrop from "../Backdrop";
import CenterBlock from "../CenterBlock";
import {
	fetchUserFromToken,
	fetchExercisesSample,
	fetchExercisesForUser,
} from "../../actions";
import { StoreState } from "../../reducers";
import { LoaderBox } from "../../components";
import { connect } from "react-redux";

const Component = ({
	children,
	userType,
	fetchExercisesForUser,
	fetchExercisesSample,
	fetchUserFromToken,
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
		if (userType === "guest") fetchExercisesSample();
		else if (["admin", "user"].includes(userType)) fetchExercisesForUser();
	}, [userType, fetchExercisesSample, fetchExercisesForUser]);

	return (
		<BackDrop>
			<Header />
			<CenterBlock>
				<LoaderBox loading={userType === "unknown"}>{children}</LoaderBox>
			</CenterBlock>
		</BackDrop>
	);
};

const mapStateToProps = (state: StoreState) => ({
	userType: state.auth.type,
});

export const LayoutWrapper = connect(mapStateToProps, {
	fetchUserFromToken,
	fetchExercisesSample,
	fetchExercisesForUser,
})(Component);

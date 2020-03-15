import React, { useEffect } from "react";
import Pages, { Modals } from "../components/pages";
import { RouteFactory } from "./utils";
import { connect } from "react-redux";
import {
	fetchUserFromToken,
	fetchExercisesSample,
	fetchExercisesForUser
} from "../actions";
import { RoutingProps } from "./interface";
import { StoreState } from "../reducers";
/**
 * Exports Page Factory which encapsulates
 * creating switched routes from array of objects with
 * IPage interface. Creates both modals and pages
 */
const Routing = ({
	fetchUserFromToken,
	fetchExercisesSample,
	fetchExercisesForUser,
	userType
}: RoutingProps) => {
	/**
	 * Fetches info about logged in
	 * user on start
	 */
	useEffect(() => {
		fetchUserFromToken();
	}, []);

	/**
	 * Fetches exercises for front page
	 * when ever the user type changes
	 */
	useEffect(() => {
		if (userType === "guest") fetchExercisesSample();
		else fetchExercisesForUser();
	}, [userType]);

	return <RouteFactory pages={Pages} modals={Modals} />;
};

const mapStateToProps = (state: StoreState) => ({
	userType: state.auth.type
});
export default connect(mapStateToProps, {
	fetchUserFromToken,
	fetchExercisesSample,
	fetchExercisesForUser
})(Routing);

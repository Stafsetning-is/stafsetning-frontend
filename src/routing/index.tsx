import React, { useEffect } from "react";
import Pages, { Modals } from "../components/pages";
import { RouteFactory } from "./utils";
import { connect } from "react-redux";
import { fetchUserFromToken, fetchExercisesSample } from "../actions";
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
	userType
}: RoutingProps) => {
	useEffect(() => {
		fetchUserFromToken();
	}, []);

	useEffect(() => {
		fetchExercisesSample();
	}, [userType]);

	return <RouteFactory pages={Pages} modals={Modals} />;
};

const mapStateToProps = (state: StoreState) => ({
	userType: state.auth.type
});
export default connect(mapStateToProps, {
	fetchUserFromToken,
	fetchExercisesSample
})(Routing);

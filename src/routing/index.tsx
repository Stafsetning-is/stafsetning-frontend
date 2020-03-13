import React, { useEffect } from "react";
import Pages, { Modals } from "../components/pages";
import { RouteFactory } from "./utils";
import { connect } from "react-redux";
import { fetchUserFromToken } from "../actions";
import { RoutingProps } from "./interface";
/**
 * Exports Page Factory which encapsulates
 * creating switched routes from array of objects with
 * IPage interface. Creates both modals and pages
 */
const Routing = ({ fetchUserFromToken }: RoutingProps) => {
	useEffect(() => {
		fetchUserFromToken();
	}, []);
	return <RouteFactory pages={Pages} modals={Modals} />;
};

export default connect(null, { fetchUserFromToken })(Routing);

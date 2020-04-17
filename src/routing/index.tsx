import React from "react";
import Pages, { Modals } from "../components/pages";
import { RouteFactory } from "./utils";
/**
 * Exports Page Factory which encapsulates
 * creating switched routes from array of objects with
 * IPage interface. Creates both modals and pages
 */
export default () => {
	return <RouteFactory pages={Pages} modals={Modals} />;
};

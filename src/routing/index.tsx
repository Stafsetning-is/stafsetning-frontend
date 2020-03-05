import React from "react";
import Pages, { Modals } from "../components/pages";
import { BrowserRouter as Router } from "react-router-dom";
import { mapElementsToRoutes } from "./utils";

/**
 * Router functional component that
 * imports pages from components/pages
 * and renders specified routers
 *
 */
export default () => {
	return (
		<Router>
			{mapElementsToRoutes(Pages)}
			{mapElementsToRoutes(Modals, "*")}
		</Router>
	);
};

import React from "react";
import { IPage, IProps } from "./interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 * Maps out items to routes
 * @param pages items implementing IPage initerface
 * @param prefix prefix for routes e.g. wildcard
 */
const mapItemsToSwitchedRoutes = (pages: IPage[], prefix = "") => (
	<Switch>
		{pages.map((Page) => (
			<Route
				path={`${prefix}${Page.route}`}
				exact={false}
				key={Page.route}
				component={Page.component}
			/>
		))}
	</Switch>
);

/**
 * Route factory which take sin pages and modals
 * and creates switched routes
 */
export const RouteFactory = ({ pages, modals }: IProps) => (
	<Router>
		{mapItemsToSwitchedRoutes(pages)}
		{mapItemsToSwitchedRoutes(modals, "*")}
	</Router>
);

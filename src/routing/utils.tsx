import React from "react";
import { IPage, IProps } from "./interface";
import { Switch, Route } from "react-router-dom";
/**
 * Maps out items to routes
 * @param pages items implementing IPage initerface
 * @param prefix prefix for routes e.g. wildcard
 */
const mapItemsToSwitchedRoutes = (pages: IPage[], prefix = "") => (
	<Switch>
		{pages.map((Page) => {
			return (
				<Route
					path={`${prefix}${Page.route}`}
					exact={true}
					key={Page.route}
					component={Page.component}
				/>
			);
		})}
	</Switch>
);

/**
 * Route factory which take sin pages and modals
 * and creates switched routes
 */
export const RouteFactory = ({ pages, modals }: IProps) => (
	<React.Fragment>
		{mapItemsToSwitchedRoutes(pages)}
		{mapItemsToSwitchedRoutes(modals, "*")}
	</React.Fragment>
);

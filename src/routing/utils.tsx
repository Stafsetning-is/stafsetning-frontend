import React from "react";
import { IPage } from "./interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 *
 * @param pages Maps out elements to routes
 * @param prefix
 */
export const mapElementsToRoutes = (pages: IPage[], prefix = "") => (
	<Switch>
		{pages.map((Page) => (
			<Route path={`${prefix}${Page.route}`} exact={false} key={Page.route}>
				<Page.component />
			</Route>
		))}
	</Switch>
);

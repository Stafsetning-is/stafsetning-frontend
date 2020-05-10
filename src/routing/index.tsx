import React, { useEffect } from "react";
import Pages, { Modals } from "../components/pages";
import { RouteFactory } from "./utils";
import { Router, Route, Switch } from "react-router-dom";
import { LayoutWrapper } from "../layout";
import { createBrowserHistory } from "history";
import Apps from "../apps/ExerciseEditor";
import { GoogleAnalytics } from "../services";

/**
 * Exports Page Factory which encapsulates
 * creating switched routes from array of objects with
 * IPage interface. Creates both modals and pages
 */
export default () => {
	const history = createBrowserHistory();

	history.listen((location) => {
		GoogleAnalytics.pageview(location.pathname);
	});

	useEffect(() => {
		GoogleAnalytics.pageview(window.location.pathname);
	}, []);

	return (
		<Router history={history}>
			<LayoutWrapper>
				<Switch>
					<Route
						path="/app/exercise-editor/*"
						component={Apps}
						exact={true}
					/>
					<RouteFactory pages={Pages} modals={[]} />
				</Switch>
				<RouteFactory pages={[]} modals={Modals} />
			</LayoutWrapper>
		</Router>
	);
};

export * from "./utils";

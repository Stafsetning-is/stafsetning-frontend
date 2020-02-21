import React from "react";
import pages from "../components/pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/**
 * Router functional component that
 * imports pages from components/pages
 * and renders specified routers
 */
export default () => {
	return (
		<Router>
			<Switch>
				{pages.map((Page) => (
					<Route path={Page.route} exact={Page.exact}>
						<Page.component />
					</Route>
				))}
			</Switch>
		</Router>
	);
};

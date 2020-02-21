import React from "react";
import pages from "../components/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * Router functional component that
 * imports pages from components/pages
 * and renders specified routers
 *
 */
export default () => {
	return (
		<Router>
			<Switch>
				{pages.map((Page) => (
					<Route path={Page.route} exact={Page.exact} key={Page.route}>
						<Page.component />
					</Route>
				))}
			</Switch>
		</Router>
	);
};

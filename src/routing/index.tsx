import React from "react";
import pages, { Modals } from "../components/pages";
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
					<Route path={Page.route} exact={false} key={Page.route}>
						<Page.component />
					</Route>
				))}
			</Switch>
			{Modals.map((Modal) => (
				<Route path={Modal.route} exact={false} key={Modal.route}>
					<Modal.component />
				</Route>
			))}
		</Router>
	);
};

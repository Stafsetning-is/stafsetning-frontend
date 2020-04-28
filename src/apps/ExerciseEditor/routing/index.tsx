import React from "react";
import { RouteFactory } from "../../../routing";
import Pages from "../components/pages";

export default () => {
	return <RouteFactory pages={Pages} modals={[]} />;
};

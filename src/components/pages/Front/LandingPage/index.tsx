import React from "react";
import { LayoutWrapper } from "../../../../layout";
import { LoaderBox } from "../../../";

export default () => {
	return (
		<LayoutWrapper>
			<LoaderBox loading={true} height="400px" />
		</LayoutWrapper>
	);
};

import React from "react";
import { LayoutWrapper } from "../../../../layout";
import { PlainTextEditor } from "../../../";

export default () => {
	return (
		<LayoutWrapper>
			<PlainTextEditor onChange={(text) => {}} />
		</LayoutWrapper>
	);
};

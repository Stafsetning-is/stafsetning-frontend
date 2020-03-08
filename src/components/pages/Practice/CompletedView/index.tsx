import React, { useEffect } from "react";
import { LayoutWrapper } from "../../../../layout";
import { LoaderBox } from "../../../";
import { IProps } from "./interface";
import { RouteComponentProps } from "react-router-dom";

export default ({ match }: RouteComponentProps<IProps>) => {
	return (
		<LayoutWrapper>
			<LoaderBox loading={true}>4</LoaderBox>
		</LayoutWrapper>
	);
};

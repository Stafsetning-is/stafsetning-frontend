import React, { useEffect, useState } from "react";
import { LayoutWrapper } from "../../../../layout";
import { LoaderBox } from "../../../";
import { IProps } from "./interface";
import { getPractice } from "./utils";
import { RouteComponentProps } from "react-router-dom";

export default ({ match }: RouteComponentProps<IProps>) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPractice(match.params.id)
			.then(() => {
				setLoading(false);
			})
			.catch((e) => {
				setErrorMessage(e.message);
			});
	});

	return (
		<LayoutWrapper>
			{errorMessage ? (
				<p>{errorMessage}</p>
			) : (
				<LoaderBox loading={loading}>4</LoaderBox>
			)}
		</LayoutWrapper>
	);
};

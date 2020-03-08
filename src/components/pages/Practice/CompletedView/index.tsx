import React, { useEffect, useState } from "react";
import { LayoutWrapper } from "../../../../layout";
import { LoaderBox, ErrorModal } from "../../../";
import { IProps } from "./interface";
import { getPractice } from "./utils";
import { RouteComponentProps } from "react-router-dom";

export default ({ match }: RouteComponentProps<IProps>) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(true);

	/**
	 * useEffect to get the practice
	 * data. If there is an promise
	 * rejection then we display error message
	 */
	useEffect(() => {
		getPractice(match.params.id)
			.then(() => {
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				setErrorMessage(e.message);
			});
	});

	return (
		<LayoutWrapper>
			{errorMessage ? (
				<ErrorModal errorMessage={errorMessage} />
			) : (
				<LoaderBox loading={loading}>4</LoaderBox>
			)}
		</LayoutWrapper>
	);
};

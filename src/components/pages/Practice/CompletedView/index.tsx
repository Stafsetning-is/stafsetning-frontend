import React, { useEffect, useState } from "react";
import { LayoutWrapper } from "../../../../layout";
import { LoaderBox, ErrorModal, PracticeFinished } from "../../../";
import { IProps, Practice } from "./interface";
import { getPractice, placeHolderPractice } from "./utils";
import { RouteComponentProps } from "react-router-dom";

export default ({ match }: RouteComponentProps<IProps>) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(true);
	const [practice, setPractice] = useState<Practice>(placeHolderPractice);
	/**
	 * useEffect to get the practice
	 * data. If there is an promise
	 * rejection then we display error message
	 */
	useEffect(() => {
		getPractice(match.params.id)
			.then((data) => {
				setLoading(false);
				setPractice(data);
			})
			.catch((e) => {
				setLoading(false);
				setErrorMessage(e.message);
			});
	});

	return (
		<LayoutWrapper>
			<ErrorModal errorMessage={errorMessage}>
				<LoaderBox loading={loading}>
					<PracticeFinished {...practice} />
				</LoaderBox>
			</ErrorModal>
		</LayoutWrapper>
	);
};

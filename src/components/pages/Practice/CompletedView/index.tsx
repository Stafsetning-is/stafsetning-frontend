import React, { useEffect, useState } from "react";
import { LoaderBox, ErrorModal, PracticeFinished } from "../../../";
import { IProps } from "./interface";
import { PracticePopulated } from "../../../../models";
import { getPractice } from "./utils";
import { RouteComponentProps } from "react-router-dom";
import { ProtectPageWrapper } from "../../../../hoc";

export default ({ match }: RouteComponentProps<IProps>) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(true);
	const [practice, setPractice] = useState<PracticePopulated>();
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
				console.log("e", e);
				setLoading(false);
				setErrorMessage(e.message);
			});
	}, [match.params.id]);

	return (
		<ProtectPageWrapper>
			<ErrorModal errorMessage={errorMessage}>
				<LoaderBox loading={loading}>
					{practice ? <PracticeFinished {...practice} /> : null}
				</LoaderBox>
			</ErrorModal>
		</ProtectPageWrapper>
	);
};

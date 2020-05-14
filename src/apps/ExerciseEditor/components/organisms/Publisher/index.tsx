import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SplitterView from "./SplitterView";
import DifficultySettings from "./DifficultySettings";
import { IProps } from "./interface";
import { UIButton } from "../../";
import { ButtonContainer, ErrorText, Outer } from "./styles";
import { publish } from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { completePublish } from "../../../actions";
import { Redirect } from "react-router-dom";

/**
 * The publisher components
 * takes care of splitting a file up,
 * setting the difficulty range and finally
 * saving the exercise
 */
const Component = ({
	file,
	splits,
	startRange,
	endRange,
	completePublish,
}: IProps) => {
	const [errorMsg, setErrorMsg] = useState<string>();
	const [redirectUrl, setRedirectUrl] = useState<string>();

	const charArray = file!.text.split("");
	charArray.push(" ");

	const handleClick = async () => {
		try {
			const data = await publish(file, splits, startRange, endRange);
			completePublish(data._id);
			setRedirectUrl("/app/exercise-editor/publish/done");
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	if (redirectUrl) return <Redirect to={redirectUrl} />;
	return (
		<Outer>
			<InfoBox />
			<SplitterView text={file.text} />
			<DifficultySettings />
			<ErrorText theme={{ hasError: errorMsg }}>{errorMsg}</ErrorText>
			<ButtonContainer>
				<UIButton onClick={handleClick} label="Birta æfingu" />
			</ButtonContainer>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	startRange: state.publisher.startRange,
	endRange: state.publisher.endRange,
	splits: state.publisher.splits,
});

export const Publisher = connect(mapStateToProps, { completePublish })(
	Component
);

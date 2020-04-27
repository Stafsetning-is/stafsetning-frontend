import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SplitterView from "./SplitterView";
import DifficultySettings from "./DifficultySettings";
import { IProps } from "./interface";
import { UIButton } from "../../";
import { ButtonContainer } from "./styles";
import { publish } from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";

const Component = ({ file, splits, startRange, endRange }: IProps) => {
	const [errorMsg, setErrorMsg] = useState<string>();
	const charArray = file!.text.split("");
	charArray.push(" ");

	const handleClick = async () => {
		try {
			await publish(file, splits, startRange, endRange);
		} catch (error) {
			setErrorMsg(error.message);
		}
	};

	return (
		<div>
			{errorMsg}
			<InfoBox />
			<SplitterView text={file.text} />
			<DifficultySettings />
			<ButtonContainer>
				<UIButton onClick={handleClick} label="Birta æfingu" />
			</ButtonContainer>
		</div>
	);
};

const mapStateToProps = (state: StoreState) => ({
	startRange: state.publisher.startRange,
	endRange: state.publisher.endRange,
	splits: state.publisher.splits,
});

export const Publisher = connect(mapStateToProps)(Component);

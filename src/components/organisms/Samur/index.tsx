import React, { useEffect } from "react";
import {
	Inner,
	Outer,
	Image,
	Text,
	ArrowUp,
	ActionContainer,
	Action,
	Blinker,
} from "./styles";
import { SAMUR_512, SAMUR_512_TALK } from "../../../static/";
import { StoreState } from "../../../reducers";
import { TutorialDialogActions, markAsCompleted } from "../../../services";
import {
	shrinkTutorial,
	continueTutorialDialog,
	growTutorial,
} from "../../../actions";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { ALLOWED_USER_TYPES } from "./utils";
import { usePrevious } from "../../../hooks";

const Component = ({
	user,
	current,
	small,
	shrinkTutorial,
	continueTutorialDialog,
	growTutorial,
}: IProps) => {
	useEffect(() => {
		if (!current) return;
		handleActionClick(current.doOnLoad);
	}, [current]);

	const previous = usePrevious(current);

	useEffect(() => {
		if (!previous) return;
		markAsCompleted(previous, user._id);
	}, [previous]);

	if (!ALLOWED_USER_TYPES.includes(user.type)) return null;
	const handleActionClick = (actions: TutorialDialogActions[]) => {
		if (!current) return;
		actions.forEach((item) => {
			switch (item) {
				case "close":
					break;
				case "continue":
					continueTutorialDialog();
					break;
				case "shrink":
					shrinkTutorial();
					break;
				case "grow":
					growTutorial();
					break;
				case "stop":
					//
					break;
			}
		});
	};

	return (
		<Outer theme={{ small }}>
			<Inner>
				<Image
					theme={{
						url: SAMUR_512,
						openMouth: SAMUR_512_TALK,
						talking: !!current,
					}}
				/>
				{current ? (
					<Text>
						<ArrowUp />
						{current.text}
						<ActionContainer>
							{current.actions.map((action) => (
								<Action
									onClick={() => handleActionClick(action.do)}
								>
									<Blinker>{">"}</Blinker>
									{action.text}
								</Action>
							))}
						</ActionContainer>
					</Text>
				) : null}
			</Inner>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	user: state.auth.user,
	current: state.tutorial.current,
	small: !state.tutorial.fullScreen,
});

export const Samur = connect(mapStateToProps, {
	shrinkTutorial,
	continueTutorialDialog,
	growTutorial,
})(Component);

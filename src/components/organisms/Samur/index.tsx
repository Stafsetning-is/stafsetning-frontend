import React, { useEffect, useCallback } from "react";
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
/**
 * A component for Sámur the helper.
 * It holds all the states Sámur can live in
 * whether it's full screen or in the corner
 * The mouth moves when Sámur is saying something
 */
const Component = ({
	user,
	current,
	small,
	shrinkTutorial,
	continueTutorialDialog,
	growTutorial,
	queue,
}: IProps) => {
	const previous = usePrevious(current);

	useEffect(() => {
		if (!previous) return;
		markAsCompleted(previous, user._id);
	}, [previous, user._id]);

	const handleActionClick = useCallback(
		(actions: TutorialDialogActions[]) => {
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
						break;
				}
			});
		},
		[continueTutorialDialog, shrinkTutorial, growTutorial, current]
	);

	useEffect(() => {
		if (!current) return;
		handleActionClick(current.doOnLoad);
	}, [current, handleActionClick]);

	const nothingToShow = !current && queue.length === 0;
	const userIsNotAuth = !ALLOWED_USER_TYPES.includes(user.type);
	if (nothingToShow || userIsNotAuth) return null;

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
	queue: state.tutorial.queue,
});

export const Samur = connect(mapStateToProps, {
	shrinkTutorial,
	continueTutorialDialog,
	growTutorial,
})(Component);

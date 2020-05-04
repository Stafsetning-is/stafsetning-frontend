import React from "react";
import { ExerciseBoxesContainer, FilterSearch } from "../../";
import { filterExercises, MAIN_TEXT } from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps } from "./interface";
import ConnectedUsers from "./ConnectedUsers";
import { Title, Paragraph } from "./styles";
import { AuthHider } from "../../../hoc";

/**
 * View that renders all components
 * that should display on front page
 */
const View = ({ filterSettings, exercises, connectedUsers }: IProps) => {
	const filtered = filterExercises(exercises, filterSettings);

	return (
		<React.Fragment>
			<AuthHider setAuthLevel="guest">
				<React.Fragment>
					<Title>Stafsetningaræfingar</Title>
					<Paragraph>{MAIN_TEXT}</Paragraph>
				</React.Fragment>
			</AuthHider>
			<ConnectedUsers connectedUsers={connectedUsers} />
			<FilterSearch />
			<ExerciseBoxesContainer exercises={filtered} />
		</React.Fragment>
	);
};

const mapStateToProps = (store: StoreState) => ({
	filterSettings: store.filter,
	exercises: store.exercises.selection,
	connectedUsers: store.socket.connectedUsers,
});

export const FrontPageView = connect(mapStateToProps)(View);

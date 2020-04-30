import React, { Fragment, useEffect } from "react";
import UserProfileDetails from "./UserProfileDetails";
import DrawerSelector from "./DrawerSelector";
import Drawer from "./Drawer";
import { ExerciseBoxesContainer } from "../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import {
	getSavedExercises,
	fetchFinishedExercises,
	fetchTrophies,
} from "../../../actions";

const Component = ({
	user,
	saved,
	finished,
	getSavedExercises,
	fetchFinishedExercises,
	trophies,
	fetchTrophies,
}: IProps) => {
	useEffect(() => {
		getSavedExercises();
		fetchFinishedExercises();
		fetchTrophies();
	}, []);
	return (
		<Fragment>
			<UserProfileDetails {...user} />
			<DrawerSelector />
			<Drawer type="finished">
				<ExerciseBoxesContainer exercises={finished} />
			</Drawer>
			<Drawer type="saved">
				<ExerciseBoxesContainer exercises={saved} />
			</Drawer>
			<Drawer type="trophies">{trophies.length}Bikarar</Drawer>
		</Fragment>
	);
};

const mapStateToProps = (store: StoreState) => ({
	user: store.auth.user,
	saved: store.userProfile.saved,
	finished: store.userProfile.finished,
	trophies: store.userProfile.trophies,
});

export const UserProfile = connect(mapStateToProps, {
	getSavedExercises,
	fetchFinishedExercises,
	fetchTrophies,
})(Component);

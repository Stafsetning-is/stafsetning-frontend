import React, { Fragment, useEffect } from "react";
import UserProfileDetails from "./UserProfileDetails";
import DrawerSelector from "./DrawerSelector";
import Drawer from "./Drawer";
import { ExerciseBoxesContainer } from "../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { getSavedExercises, fetchFinishedExercises } from "../../../actions";

const Component = ({
	user,
	saved,
	finished,
	getSavedExercises,
	fetchFinishedExercises,
}: IProps) => {
	useEffect(() => {
		getSavedExercises();
		fetchFinishedExercises();
	}, []);
	return (
		<Fragment>
			<UserProfileDetails {...user} />
			<DrawerSelector />
			<Drawer type="finished">
				<ExerciseBoxesContainer exercises={finished} hideStar />
			</Drawer>
			<Drawer type="saved">
				<ExerciseBoxesContainer exercises={saved} hideStar />
			</Drawer>
		</Fragment>
	);
};

const mapStateToProps = (store: StoreState) => ({
	user: store.auth.user,
	saved: store.userProfile.saved,
	finished: store.userProfile.finished,
});

export const UserProfile = connect(mapStateToProps, {
	getSavedExercises,
	fetchFinishedExercises,
})(Component);

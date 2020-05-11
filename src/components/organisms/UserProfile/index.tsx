import React, { Fragment, useEffect } from "react";
import UserProfileDetails from "./UserProfileDetails";
import DrawerSelector from "./DrawerSelector";
import Drawer from "./Drawer";
import { ExerciseBoxesContainer } from "../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { TrophyBoxesContainer } from "../../organisms";
import {
    getSavedExercises,
    fetchFinishedExercises,
    fetchTrophies
} from "../../../actions";
/**
 * The UserProfile component uses the UserProfileDetails component
 * to get the user details and holds a drawer to be able to
 * select different views there are:
 * finished exercises (default view)
 * saved exercises
 * trophies
 */
const Component = ({
    user,
    saved,
    finished,
    getSavedExercises,
    fetchFinishedExercises,
    trophies,
    fetchTrophies
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
                <ExerciseBoxesContainer exercises={finished} hideStar />
            </Drawer>
            <Drawer type="saved">
                <ExerciseBoxesContainer exercises={saved} hideStar />
            </Drawer>
            <Drawer type="trophies">
                <TrophyBoxesContainer trophies={trophies} />
            </Drawer>
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    user: store.auth.user,
    saved: store.userProfile.saved,
    finished: store.userProfile.finished,
    trophies: store.userProfile.trophies
});

export const UserProfile = connect(mapStateToProps, {
    getSavedExercises,
    fetchFinishedExercises,
    fetchTrophies
})(Component);

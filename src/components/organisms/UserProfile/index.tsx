import React, { Fragment, useEffect } from "react";
import UserProfileDetails from "./UserProfileDetails";
import DrawerSelector from "./DrawerSelector";
import Drawer from "./Drawer";
import { ExerciseBoxesContainer } from "../../";
import EmptyListMessage from "./EmptyListMessage";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { getSavedExercises, fetchFinishedExercises } from "../../../actions";

const Component = ({ user, saved, finished, getSavedExercises, fetchFinishedExercises }: IProps) => {
    useEffect(() => {
        getSavedExercises();
        fetchFinishedExercises();
    }, []);
    return (
        <Fragment>
            <UserProfileDetails {...user} />
            <DrawerSelector />
            <Drawer type="finished">
                {   // Check if there are any saved exercises
                    (finished.length !== 0)
                        ? <ExerciseBoxesContainer exercises={finished} />
                        : <EmptyListMessage>Þú hefur ekki klárað neinar æfingar. Farðu í gegnum heila æfingu til að birta þær hér.</EmptyListMessage>
                }
            </Drawer>
            <Drawer type="saved">
            {   // Check if there are any finished exercises
                (saved.length !== 0)
                    ? <ExerciseBoxesContainer exercises={saved} />
                    : <EmptyListMessage>Þú hefur ekki vistað neinar æfingar. Smelltu á stjörnuna uppi í horni æfingar til að vista hana.</EmptyListMessage>
            }
            </Drawer>
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    user: store.auth.user,
    saved: store.userProfile.saved,
    finished: store.userProfile.finished
});

export const UserProfile = connect(mapStateToProps, {
    getSavedExercises,
    fetchFinishedExercises
})(Component);

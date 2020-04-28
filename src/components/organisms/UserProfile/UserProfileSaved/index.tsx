import React, { Fragment, useEffect } from "react";
import { ExerciseBoxesContainer } from "../../ExerciseBoxesContainer";
import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { getSavedExercises } from "../../../../actions";
/**
 * UserProfileOverview component takes in props for the array of
 * exercises as well as all the finished exercises fetched from
 * the redux store userProfile
 *
 */
const Component = ({ exercises, getSavedExercises }: IProps) => {
    useEffect(() => {
        getSavedExercises();
    }, []);
    return (
        <Fragment>
            <ExerciseBoxesContainer exercises={exercises} />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    exercises: store.exercises.selection,
});

export const UserProfileSaved = connect(mapStateToProps, {
    getSavedExercises,
})(Component);
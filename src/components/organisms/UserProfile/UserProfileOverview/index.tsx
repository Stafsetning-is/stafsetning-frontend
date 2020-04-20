import React, { Fragment, useEffect } from "react";
import { ExerciseBoxesContainer } from "../../../organisms/ExerciseBoxesContainer";
import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { fetchFinishedExercises } from "../../../../actions";
// fetchFinishedExercises skoða betur
const Component = ({ exercises, fetchFinishedExercises }: IProps) => {
    useEffect(() => {
        fetchFinishedExercises();
    }, []);
    return (
        <Fragment>
            <ExerciseBoxesContainer exercises={exercises} />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    exercises: store.userProfile.finishedExercises,
});

export const UserProfileOverview = connect(mapStateToProps, {
    fetchFinishedExercises,
})(Component);

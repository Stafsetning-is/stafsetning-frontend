import React, { Fragment } from "react";
import { ExerciseBoxesContainer } from "../../../organisms/ExerciseBoxesContainer";
import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";
import { IProps } from "./interface";

const Component = ({ exercises }: IProps) => {
    return (
        <Fragment>
            <ExerciseBoxesContainer exercises={exercises} />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    exercises: store.exercises.selection,
});

export const UserProfileOverview = connect(mapStateToProps)(Component);

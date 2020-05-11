import React, { useEffect, useState } from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { starExerciseInSelection } from "../../../actions";
import { LoadingGrid } from "../../";

/**
 * Renders a list of exercises.
 * It holds 3 columns so there are 3 exercises in each row.
 * When a user clicks on the star icon it saves the new state of it
 * in a redux store.
 */
const Component = ({
    exercises,
    limit,
    starExerciseInSelection,
    hideStar
}: IProps) => {
    const sliceAt = limit ?? exercises.length;

    return (
        <LoadingGrid itemsInRow={3}>
            {exercises.slice(0, sliceAt).map((itm) => (
                <ExerciseBox
                    hideStar={hideStar}
                    {...itm}
                    key={`${itm._id}:${itm.saved}`}
                    onStarClick={starExerciseInSelection}
                />
            ))}
        </LoadingGrid>
    );
};

export const ExerciseBoxesContainer = connect(null, {
    starExerciseInSelection
})(Component);

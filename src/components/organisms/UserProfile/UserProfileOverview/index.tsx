import React, { Fragment, useEffect } from "react";
import { ExerciseBoxesContainer } from "../../../organisms/ExerciseBoxesContainer";
import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";
import { IProps } from "./interface";
// import { fetchFinishedExercises } from "../../../../actions";
// /**
//  * UserProfileOverview component takes in props for the array of
//  * exercises as well as all the finished exercises fetched from
//  * the redux store userProfile
//  *
//  */
// const Component = ({ exercises, fetchFinishedExercises }: IProps) => {
//     useEffect(() => {
//         fetchFinishedExercises();
//     }, []);
//     return (
//         <Fragment>
//             <ExerciseBoxesContainer exercises={exercises} />
//         </Fragment>
//     );
// };

// const mapStateToProps = (store: StoreState) => ({
//     exercises: store.userProfile.finishedExercises,
// });

// export const UserProfileOverview = connect(mapStateToProps, {
//     fetchFinishedExercises,
// })(Component);

import { fetchSavedExercises } from "../../../../actions";
/**
 * UserProfileOverview component takes in props for the array of
 * exercises as well as all the finished exercises fetched from
 * the redux store userProfile
 *
 */
const Component = ({ exercises, fetchSavedExercises }: IProps) => {
    useEffect(() => {
        fetchSavedExercises();
    }, []);
    return (
        <Fragment>
            <ExerciseBoxesContainer exercises={exercises} />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    exercises: store.exercises.selection
});

export const UserProfileOverview = connect(mapStateToProps, {
    fetchSavedExercises,
})(Component);

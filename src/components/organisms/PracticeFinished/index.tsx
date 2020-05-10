import React, { useEffect, useState } from "react";
import { IProps } from "./interface";
import {
    TopBar,
    TitleText,
    TitleElement,
    SecondaryTitle,
    OverviewContainer,
    SuggestionTitle,
    Outer,
    ErrorCount
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import Moment from "moment";
import "moment/locale/is";
import PracticeText from "./PracticeText";
import { getFeedback } from "./utils";
import { Api } from "../../../api";
/**
 * PracticeFinished component which gives the user
 * results from a specific exercise the user did.
 * It gets the time in which the exercise was finished.
 * It gets a proverb for the user from the api.
 * Gives the user feedback on what he/she did wrong
 * and gives the user suggestions on what exercises
 * he/she should do next gotten from the redux store
 * of the exercises.
 */
const Component = ({
    nextUp,
    exercise: { title },
    errorItems,
    createdAt,
    exerciseString
}: IProps) => {
    Moment.locale("is");
    const test = Moment(createdAt).fromNow();
    const initialState = "";

    const [data, setData] = useState(initialState);

    useEffect(() => {
        const url = window.location.href;
        const practiceId = url.substring(url.lastIndexOf("/") + 1);
        const fetchData = async () => {
            const result = await Api.get<string>(
                `/api/v1/practices/${practiceId}/proverb`
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <TitleText>
                <TitleElement>{title}</TitleElement>
            </TitleText>
            <SecondaryTitle>
                <TitleElement>{test}</TitleElement>
            </SecondaryTitle>
            <TopBar>{data}</TopBar>
            <OverviewContainer>
                <Outer>
                    <ErrorCount>{getFeedback(errorItems.length)}</ErrorCount>
                </Outer>
            </OverviewContainer>
            <PracticeText exerciseString={exerciseString} errors={errorItems} />
            <SuggestionTitle>Haltu áfram að æfa þig!</SuggestionTitle>
            <ExerciseBoxesContainer exercises={nextUp} limit={9} />
        </React.Fragment>
    );
};

const mapStateToProps = (state: StoreState) => ({
    nextUp: state.exercises.selection
});

export const PracticeFinished = connect(mapStateToProps)(Component);

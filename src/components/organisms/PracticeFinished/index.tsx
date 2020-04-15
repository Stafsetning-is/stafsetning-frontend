import React from "react";
import { IProps } from "./interface";
import {
    TopBar,
    TitleText,
    TitleElement,
    SecondaryTitle,
    OverviewContainer,
    SuggestionTitle,
    Outer,
    ErrorCount,
    TimeText,
} from "./styles";
import { ExerciseBoxesContainer } from "../../";
import TryTable from "./TryTable";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { durationToTime } from "./utils";
import Moment from "moment";
import "moment/locale/is";
import PracticeText from "./PracticeText";
const Component = ({
    nextUp,
    exercise: { title },
    errorItems,
    duration,
    createdAt,
}: IProps) => {
    const [mm, ss] = durationToTime(duration);
    Moment.locale("is");
    const test = Moment(createdAt).fromNow();
    return (
        <React.Fragment>
            <TitleText>
                <TitleElement>{title}</TitleElement>
            </TitleText>
            <SecondaryTitle>
                <TitleElement>{test}</TitleElement>
            </SecondaryTitle>
            <TopBar>
                <p>Vel gert! Æfingin skapar meistarann</p>
            </TopBar>
            <OverviewContainer>
                <Outer>
                    <ErrorCount>
                        Þú gerðir {errorItems.length} Villur
                    </ErrorCount>
                </Outer>
            </OverviewContainer>
            <SuggestionTitle>Haltu áfram að æfa þig!</SuggestionTitle>
            <ExerciseBoxesContainer exercises={nextUp} />
        </React.Fragment>
    );
};

const mapStateToProps = (state: StoreState) => ({
    nextUp: state.exercises.selection,
});

export const PracticeFinished = connect(mapStateToProps)(Component);

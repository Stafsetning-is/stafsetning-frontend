import React from "react";
import { IProps } from "./interface";
import { InfoBox } from "../../../";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { Icon, Inner } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
/**
 * This component holds statistics on each
 * exercise for the teachers.
 * It holds a count on how many times a specific
 * exercise has been finished by a student.
 */
const Component = ({ counter, userId, ownerId }: IProps) => {
    if (userId !== ownerId) return null;
    return (
        <InfoBox>
            <Inner>
                <Icon>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </Icon>
                Þessi æfing hefur verið kláruð&nbsp;<b>{counter}</b>&nbsp;sinnum
                af nemendum &nbsp;
                <b>Stafsetning.is</b>&nbsp; síðan þú bjóst hana til.
            </Inner>
        </InfoBox>
    );
};

const mapStateToProps = (state: StoreState) => ({
    userId: state.auth.user._id
});

export default connect(mapStateToProps)(Component);

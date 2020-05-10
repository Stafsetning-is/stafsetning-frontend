import * as React from "react";
import { IProps } from "./interface";
import {
    Frame,
    UserName,
    UserPictureContainer,
    UserPicture,
    PointsContainer
} from "./styles";
import { Points } from "../../../";
import { connect } from "react-redux";
import { openPickGenderView } from "../../../../actions";
/**
 * UserProfileDetails holds the user's avatar,
 * the user's full name and the points the user has.
 */
const Component = ({ avatar, name, points, openPickGenderView }: IProps) => {
    return (
        <Frame>
            <UserPictureContainer>
                <UserPicture
                    src={avatar}
                    alt={`Holdgervingur ${name}`}
                    onClick={openPickGenderView}
                />
            </UserPictureContainer>
            <UserName>{name}</UserName>
            <PointsContainer>
                <Points points={points} whiteBG />
            </PointsContainer>
        </Frame>
    );
};

export default connect(null, { openPickGenderView })(Component);

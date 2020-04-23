import * as React from "react";
import { IProps } from "./interface";
import { Frame, UserName, UserPictureContainer, UserPicture } from "./styles";
import userIcon from "./Michelin-5.jpg";

export default ({ avatar, name }: IProps) => {
    return (
        <Frame>
            <UserPictureContainer>
                <UserPicture src={userIcon} />
            </UserPictureContainer>
            <UserName>{name}</UserName>
        </Frame>
    );
};

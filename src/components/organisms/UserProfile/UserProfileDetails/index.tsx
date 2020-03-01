import * as React from "react";
import { IProps } from "./interface";
import { Frame, UserName, UserPictureContainer, UserPicture } from "./styles";
import userIcon from "./Michelin-5.jpg";

export default ({ userImage, userName }: IProps) => {
    return (
        <Frame>
            <UserPictureContainer>
                <UserPicture src={userIcon} />
            </UserPictureContainer>
            <UserName>{userName}</UserName>
        </Frame>
    );
};

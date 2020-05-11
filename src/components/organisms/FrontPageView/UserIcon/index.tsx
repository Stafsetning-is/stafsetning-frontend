import React from "react";
import { SmallAvatar } from "../../../";
import { Wrapper } from "./styles";
import { IProps } from "./interface";

/**
 * Holds the picture/s of the connected users
 */
export default ({ index, src }: IProps) => {
    return (
        <Wrapper theme={{ index }}>
            <SmallAvatar url={src} />
        </Wrapper>
    );
};

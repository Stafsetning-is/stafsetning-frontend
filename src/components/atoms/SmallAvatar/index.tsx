import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";

/**
 * The properties connected with avatar info
 * @param url references the actual url to the avatar
 * @param xs means extra small and if it is set, then the avatar is smaller
 */
export const SmallAvatar = ({ url, xs }: IProps) => {
    return <Outer theme={{ url, xs }} />;
};

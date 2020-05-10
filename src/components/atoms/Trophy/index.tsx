import React from "react";
import { Outer, Title, Icon, Inner } from "./styles";
import { IProps } from "./interface";
import { TrophyIcon } from "../../";

/**
 * Trophy is earned when specific requirements set by the trophy creator are met by the user
 * when the user unlocks the trophy, it will become available for viewing in the trophy area located in the user´s profile page
 * @param icon has to do with the image shown on the trophy modal
 * @param title Represents the name of the trophy
 * @param
 */
export const Trophy = ({ icon, title, locked, onClick }: IProps) => {
    return (
        <Outer onClick={onClick}>
            <Inner theme={{ locked }} onClick={onClick}>
                <Icon>
                    <TrophyIcon icon={icon} />
                </Icon>
                <Title>{title}</Title>
            </Inner>
        </Outer>
    );
};

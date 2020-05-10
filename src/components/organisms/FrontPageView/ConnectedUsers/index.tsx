import React from "react";
import { InfoBox } from "../../../";
import { IProps } from "./interface";
import { Inner, Outer, Text } from "./styles";
import UserIcon from "../UserIcon";

/**
 * Holds the number of connected users in the system.
 * Makes sure to change to the correct Icelandic conjugation
 * if there is one user connected.
 * Uses the UserIcon component to show the picture.
 */
export default ({ connectedUsers }: IProps) => {
    const users = connectedUsers.slice(0, 3);

    const getPluralOrSingular = (count: number) => {
        if (count === 11 || count % 10 !== 1) return "nemendur";
        return "nemandi";
    };

    return (
        <Outer>
            <InfoBox>
                <Inner>
                    {users.map((user, i) => (
                        <UserIcon index={i} src={user.avatar} />
                    ))}
                    <Text theme={{ count: users.length }}>{`${
                        connectedUsers.length
                    } ${getPluralOrSingular(
                        connectedUsers.length
                    )} á Stafsetning.is ákkurat núna`}</Text>
                </Inner>
            </InfoBox>
        </Outer>
    );
};

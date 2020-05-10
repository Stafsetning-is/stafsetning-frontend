import React from "react";
import { Outer, Points as Text, Coin } from "./styles";
import { IProps } from "./interface";

/**
 * This has to do with the award system and how it is displayed on the site
 * @param points has to do with the number of coins that the user has earned
 */
export const Points = ({ points, whiteBG }: IProps) => {
    //here the coin is displayed along with the number of them that the user has earned
    return (
        <Outer>
            <Coin />
            <Text theme={{ darkText: !!whiteBG }}>{points}</Text>
        </Outer>
    );
};

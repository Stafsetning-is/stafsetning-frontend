import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

/** To highlight each key on the on screen keyboard when it's
 * supposed to be pressed.
 */
export default ({ character, higlight, padding }: IProps) => {
    return <Outer theme={{ higlight, padding }}>{character}</Outer>;
};

import React, { useState, useEffect } from "react";
import { Outer, Inner } from "./styles";
import { IProps } from "./interface";
/**
 * An bar that takes in a ratio of
 * how how many completed said row
 * compared to the most completed exercise
 *
 * And returns a bar that is proportionally
 * wide to said ratio.
 */
export default ({ ratio }: IProps) => {
    const [barLength, setBarLength] = useState(0);

    useEffect(() => {
        setBarLength(ratio);
    }, [ratio]);

    const displayWidth = ratio === 0 ? 0.01 : barLength;
    return (
        <Outer>
            <Inner theme={{ ratio: displayWidth }} />
        </Outer>
    );
};

import React, { useState, useEffect } from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

/*FlipCard is used for the display of Trophies
 in regards to the pop-up for when the user earns the trophy
 They are set to be shown when the setSow is set to true
 */
export const FlipCard = ({ children }: IProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 250);
    }, []);

    return <Outer theme={{ show }}>{children}</Outer>;
};

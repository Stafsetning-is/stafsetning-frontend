import React from "react";
import { Outer, Line } from "./styles";
import Key from "./Key";
import {
    NUM_LINE_CHARS,
    TOP_LINE_CHARS,
    MID_LINE_CHARS,
    BTM_LINE_CHARS,
    SPACE,
    getHighlightedKeys
} from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { IProps } from "./interface";
/**
 * A component for the look of the on screen keyboard.
 * Shows up if the user has it in hers/his settings.
 */
const KeyBoard = ({ showOnScreenKeyboard, highlight }: IProps) => {
    if (!showOnScreenKeyboard) return null;
    const lines = [
        NUM_LINE_CHARS,
        TOP_LINE_CHARS,
        MID_LINE_CHARS,
        BTM_LINE_CHARS
    ];

    const highlightedKeys = getHighlightedKeys(highlight);

    return (
        <Outer>
            {lines.map((line: string[]) => (
                <Line>
                    {line.map((char: string) => (
                        <Key
                            character={char}
                            key={char}
                            higlight={highlightedKeys.includes(char)}
                        />
                    ))}
                </Line>
            ))}
            <Line>
                <Key
                    character={SPACE}
                    padding="0px 200px"
                    higlight={highlightedKeys.includes(SPACE)}
                />
            </Line>
        </Outer>
    );
};

const mapStateToProps = (state: StoreState) => state.auth.user.preferences;

export default connect(mapStateToProps)(KeyBoard);

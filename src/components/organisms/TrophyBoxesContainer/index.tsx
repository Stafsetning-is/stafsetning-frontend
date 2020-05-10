import React from "react";
import { IProps } from "./interface";
import { Trophy } from "../../";
import { LoadingGrid } from "../..";
import { LOCKED_TROPHIES, ITEM_IN_ROWS, ROWS } from "./utils";
import { setTrophy } from "../../../actions";
import { connect } from "react-redux";
/**
 * Renders a list of trophies
 */
const Component = ({ trophies, setTrophy }: IProps) => {
    trophies = [...trophies, ...LOCKED_TROPHIES].slice(0, ITEM_IN_ROWS * ROWS);
    return (
        <LoadingGrid itemsInRow={5}>
            {trophies.map((item) => (
                <Trophy
                    {...item}
                    onClick={() => setTrophy({ ...item, old: true })}
                />
            ))}
        </LoadingGrid>
    );
};

export const TrophyBoxesContainer = connect(null, { setTrophy })(Component);

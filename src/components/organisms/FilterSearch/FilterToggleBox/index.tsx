import React from "react";
import { IProps } from "./interface";
import { Outer, CheckBox, Text } from "./styles";
import { reloadSelection } from "../../../../actions";
import { connect } from "react-redux";
/**
 * A simple UI box to display
 * the grammar rules that are available
 */
const Component = ({ name, onClick, selected, reloadSelection }: IProps) => {
    const handleClick = () => {
        onClick();
        reloadSelection();
    };
    return (
        <Outer theme={{ selected }} onClick={handleClick}>
            <CheckBox theme={{ selected }} />
            <Text>{name}</Text>
        </Outer>
    );
};

export default connect(null, { reloadSelection })(Component);

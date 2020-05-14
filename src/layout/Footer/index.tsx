import React from "react";
import CenterBlock from "../CenterBlock";
import { Outer, Inner, Item } from "./styles";
import { NavLink } from "react-router-dom";

export default () => {
    return (
        <Outer>
            <CenterBlock>
                <Inner>
                    <NavLink to="/about-us">
                        <Item>Um okkur</Item>
                    </NavLink>
                    <NavLink to="/cookies">
                        <Item>Skilmálar</Item>
                    </NavLink>
                    <a href="https://www.ru.is/">
                        <Item>Reykjavík University</Item>
                    </a>
                    <a href="https://github.com/Stafsetning-is/">
                        <Item>Github</Item>
                    </a>
                </Inner>
            </CenterBlock>
        </Outer>
    );
};

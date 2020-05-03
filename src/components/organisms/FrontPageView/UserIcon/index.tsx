import React from "react";
import { SmallAvatar } from "../../../";
import { Wrapper } from "./styles";
import { IProps } from "./interface";

export default ({ index }: IProps) => {
	return (
		<Wrapper theme={{ index }}>
			<SmallAvatar url="https://picsum.photos/150/150" />
		</Wrapper>
	);
};

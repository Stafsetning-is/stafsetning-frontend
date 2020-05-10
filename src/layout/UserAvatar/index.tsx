import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { SmallAvatar } from "../../components";

/**
 * Takes in src string as prop and
 * displays the avatar with that url
 *
 * */
export default ({ src }: IProps) => {
	return (
		<Outer>
			<SmallAvatar xs url={src} />
		</Outer>
	);
};

import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { SmallAvatar } from "../../components";

export default ({ src }: IProps) => {
	return (
		<Outer>
			<SmallAvatar xs url={src} />
		</Outer>
	);
};

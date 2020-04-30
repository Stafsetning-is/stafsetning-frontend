import React, { useState, useEffect } from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

export const FlipCard = ({ children }: IProps) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => setShow(true), 250);
	}, []);

	return <Outer theme={{ show }}>{children}</Outer>;
};

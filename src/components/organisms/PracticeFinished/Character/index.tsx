import React, { useState } from "react";
import { IProps } from "./interface";
import { CharacterSpan, ErrorSpan, TypedError } from "./styles";

export default ({ char, error }: IProps) => {
	const [showError, setShowError] = useState(false);

	if (error === " ") error = "óþarfa bil";
	if (error === ".") error = "óþarfa punktur";
	if (error === ",") error = "óþarfa komma";
	if (error && char === " ") char = "_";

	const typedError = showError ? <TypedError>{error}</TypedError> : null;

	if (error)
		return (
			<ErrorSpan
				onMouseLeave={() => setShowError(false)}
				onMouseEnter={() => setShowError(true)}
			>
				{char}
				{typedError}
			</ErrorSpan>
		);
	return <CharacterSpan>{char}</CharacterSpan>;
};

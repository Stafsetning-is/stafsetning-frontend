import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import ErrorCounter from "./ErrorCounter";

export const SpellingPractice = ({ exercise }: IProps) => {
	return <ErrorCounter count={4} />;
};

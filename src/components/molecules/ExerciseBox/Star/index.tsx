import React, { useState, isValidElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";
import { StarBox } from "../styles";
import { IProps } from "./interface";
import { Api } from "../../../../api";

export default ({ saved, handleToogle, exercise }: IProps) => {
	const [loading, setLoading] = useState(false);

	const saveEndpoint =
		`/api/v1/users/exercises/${exercise}/` + (saved ? "unsave" : "save");

	const handleSave = () => {
		const updateValue = !saved;
		setLoading(true);
		Api.post(saveEndpoint, {})
			.then(() => {
				setLoading(false);
				handleToogle(updateValue);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<StarBox onClick={handleSave}>
			{loading ? (
				<ClipLoader size={5} color={"rgba(255, 195, 55, 1)"} />
			) : (
				<FontAwesomeIcon icon={faStar} />
			)}
		</StarBox>
	);
};

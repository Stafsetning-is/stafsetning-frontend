import React from "react";
import CenterBlock from "../CenterBlock";
import { Outer, Inner, Item } from "./styles";

export default () => {
	return (
		<Outer>
			<CenterBlock>
				<Inner>
					<a href="https://www.stafsetning.is/">
						<Item>Stafsetning.is</Item>
					</a>

					<a href="https://www.ru.is/">
						<Item>Reykjavik University</Item>
					</a>
					<a href="https://github.com/Stafsetning-is/">
						<Item>Github</Item>
					</a>
				</Inner>
			</CenterBlock>
		</Outer>
	);
};

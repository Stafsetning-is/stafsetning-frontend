export const URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000"
		: "https://stafs-api.herokuapp.com";

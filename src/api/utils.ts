const PRODUCTION_URL = "https://stafs-api.herokuapp.com";
const DEVELOPMENT_URL = "https://stafs-api.herokuapp.com";
const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const URL = IS_DEVELOPMENT ? PRODUCTION_URL : DEVELOPMENT_URL;

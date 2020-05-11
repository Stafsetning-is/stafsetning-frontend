declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        PUBLIC_URL: string;
        REACT_APP_GA_TRACKING: string;
    }
}

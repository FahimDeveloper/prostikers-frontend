// Define valid environment keys
type TDevelop = "LIVE_PRODUCTION" | "DEVELOPMENT" | "TEST_PRODUCTION";

const version: Record<string, TDevelop> = {
  local: "DEVELOPMENT",
  live: "LIVE_PRODUCTION",
  test: "TEST_PRODUCTION",
};

const activeEnv: TDevelop = version.live;

const envKeys: Record<
  TDevelop,
  {
    BASE_URL: string;
    FEEDBACK_URL: string;
    AUTH_REFRESH_URL: string;
    APIKEY: string;
    AUTHDOMAIN: string;
    PROJECTID: string;
    STORAGEBUCKET: string;
    MESSAGINGSENDERID: string;
    APPID: string;
    STRIPE_KEY: string;
  }
> = {
  LIVE_PRODUCTION: {
    BASE_URL: import.meta.env.VITE_APP_LIVE_API_URL,
    FEEDBACK_URL: import.meta.env.VITE_APP_LIVE_FEEDBACK_API_URL,
    AUTH_REFRESH_URL: import.meta.env.VITE_APP_LIVE_AUTH_REFRESH_URL,
    APIKEY: import.meta.env.VITE_APP_LIVE_APIKEY,
    AUTHDOMAIN: import.meta.env.VITE_APP_LIVE_AUTHDOMAIN,
    PROJECTID: import.meta.env.VITE_APP_LIVE_PROJECTID,
    STORAGEBUCKET: import.meta.env.VITE_APP_LIVE_STORAGEBUCKET,
    MESSAGINGSENDERID: import.meta.env.VITE_APP_LIVE_MESSAGINGSENDERID,
    APPID: import.meta.env.VITE_APP_LIVE_APPID,
    STRIPE_KEY: import.meta.env.VITE_APP_LIVE_STRIPE_KEY,
  },
  DEVELOPMENT: {
    BASE_URL: import.meta.env.VITE_APP_LOCAL_API_URL,
    FEEDBACK_URL: import.meta.env.VITE_APP_LOCAL_FEEDBACK_API_URL,
    AUTH_REFRESH_URL: import.meta.env.VITE_APP_LOCAL_AUTH_REFRESH_URL,
    APIKEY: import.meta.env.VITE_APP_LOCAL_APIKEY,
    AUTHDOMAIN: import.meta.env.VITE_APP_LOCAL_AUTHDOMAIN,
    PROJECTID: import.meta.env.VITE_APP_LOCAL_PROJECTID,
    STORAGEBUCKET: import.meta.env.VITE_APP_LOCAL_STORAGEBUCKET,
    MESSAGINGSENDERID: import.meta.env.VITE_APP_LOCAL_MESSAGINGSENDERID,
    APPID: import.meta.env.VITE_APP_LOCAL_APPID,
    STRIPE_KEY: import.meta.env.VITE_APP_LOCAL_STRIPE_KEY,
  },
  TEST_PRODUCTION: {
    BASE_URL: import.meta.env.VITE_APP_TEST_API_URL,
    FEEDBACK_URL: import.meta.env.VITE_APP_TEST_FEEDBACK_API_URL,
    AUTH_REFRESH_URL: import.meta.env.VITE_APP_TEST_AUTH_REFRESH_URL,
    APIKEY: import.meta.env.VITE_APP_TEST_APIKEY,
    AUTHDOMAIN: import.meta.env.VITE_APP_TEST_AUTHDOMAIN,
    PROJECTID: import.meta.env.VITE_APP_TEST_PROJECTID,
    STORAGEBUCKET: import.meta.env.VITE_APP_TEST_STORAGEBUCKET,
    MESSAGINGSENDERID: import.meta.env.VITE_APP_TEST_MESSAGINGSENDERID,
    APPID: import.meta.env.VITE_APP_TEST_APPID,
    STRIPE_KEY: import.meta.env.VITE_APP_TEST_STRIPE_KEY,
  },
};

// Export values safely
export const baseUrl = {
  BASE_URL: envKeys[activeEnv].BASE_URL,
  FEEDBACK_URL: envKeys[activeEnv].FEEDBACK_URL,
  AUTH_REFRESH_URL: envKeys[activeEnv].AUTH_REFRESH_URL,
};

export const configKey = {
  APIKEY: envKeys[activeEnv].APIKEY,
  AUTHDOMAIN: envKeys[activeEnv].AUTHDOMAIN,
  PROJECTID: envKeys[activeEnv].PROJECTID,
  STORAGEBUCKET: envKeys[activeEnv].STORAGEBUCKET,
  MESSAGINGSENDERID: envKeys[activeEnv].MESSAGINGSENDERID,
  APPID: envKeys[activeEnv].APPID,
  STRIPE_KEY: envKeys[activeEnv].STRIPE_KEY,
};

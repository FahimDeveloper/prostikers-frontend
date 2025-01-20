const production: boolean = import.meta.env.PROD;

export const baseUrl = {
  BASE_URL: production
    ? import.meta.env.VITE_APP_LIVE_API_URL
    : import.meta.env.VITE_APP_TEST_API_URL,
  FEEDBACK_URL: production
    ? import.meta.env.VITE_APP_LIVE_FEEDBACK_API_URL
    : import.meta.env.VITE_APP_TEST_FEEDBACK_API_URL,
  AUTH_REFRESH_URL: production
    ? import.meta.env.VITE_APP_LIVE_AUTH_REFRESH_URL
    : import.meta.env.VITE_APP_TEST_AUTH_REFRESH_URL,
};

export const configKey = {
  APIKEY: production
    ? import.meta.env.VITE_APP_LIVE_APIKEY
    : import.meta.env.VITE_APP_TEST_APIKEY,
  AUTHDOMAIN: production
    ? import.meta.env.VITE_APP_LIVE_AUTHDOMAIN
    : import.meta.env.VITE_APP_TEST_AUTHDOMAIN,
  PROJECTID: production
    ? import.meta.env.VITE_APP_LIVE_PROJECTID
    : import.meta.env.VITE_APP_TEST_PROJECTID,
  STORAGEBUCKET: production
    ? import.meta.env.VITE_APP_LIVE_STORAGEBUCKET
    : import.meta.env.VITE_APP_TEST_STORAGEBUCKET,
  MESSAGINGSENDERID: production
    ? import.meta.env.VITE_APP_LIVE_MESSAGINGSENDERID
    : import.meta.env.VITE_APP_TEST_MESSAGINGSENDERID,
  APPID: production
    ? import.meta.env.VITE_APP_LIVE_APPID
    : import.meta.env.VITE_APP_TEST_APPID,
  STRIPE_KEY: production
    ? import.meta.env.VITE_APP_LIVE_STRIPE_KEY
    : import.meta.env.VITE_APP_TEST_STRIPE_KEY,
};

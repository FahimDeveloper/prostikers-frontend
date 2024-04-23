type TDevelop = {
  PRODUCTION: boolean;
  DEVELOPMENT: boolean;
};

const develop: TDevelop = {
  PRODUCTION: true,
  DEVELOPMENT: false,
};

const production: boolean = develop.DEVELOPMENT;

export const baseUrl = {
  AUTH_REFRESH_URL: production
    ? import.meta.env.VITE_APP_LIVE_API_URL
    : import.meta.env.VITE_APP_TEST_API_URL,
  BASE_URL: production
    ? import.meta.env.VITE_APP_LIVE_AUTH_REFRESH_URL
    : import.meta.env.VITE_APP_TEST_AUTH_REFRESH_URL,
};

export const API_SERVICES_URLS = {
  SIGN_UP: "/user/signup",
  SIGN_IN: "/user/login",
  FORGOT_PASSWORD: "/user/password/forgot",
  VERIFY_CODE: "/user/password/verify-code",
  RECOVER_PASSWORD: "/user/password/recover",
  VERIFICATION: {
    EMAIL: "/user/verify/email",
  },
} as const;

export const COOKIES_KEYS = {
  currentUser: "currentUser",
} as const;

export const LOCAL_STORAGE_KEYS = {} as const;

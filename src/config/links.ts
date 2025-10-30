const normalizeBase = (url?: string) => (url ? url.replace(/\/+$/, "") : "");

const join = (base: string, path: string) =>
  `${normalizeBase(base)}${path.startsWith("/") ? path : `/${path}`}`;

export const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL ?? "";

export const LOGIN_HREF = APP_BASE_URL
  ? join(APP_BASE_URL, "/auth/login")
  : "/auth/login";

export const SIGNUP_HREF = APP_BASE_URL
  ? join(APP_BASE_URL, "/auth/signup")
  : "/auth/signup";

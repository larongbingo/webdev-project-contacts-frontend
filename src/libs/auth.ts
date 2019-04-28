import { AUTH_ROUTES } from "../endpoints";

export const AUTH_KEY = "SESSION";

export function isAuthenticated() {
  return !!sessionStorage.getItem(AUTH_KEY);
}

export function getBearerToken() {
  return `Bearer ${sessionStorage.getItem(AUTH_KEY)}`;
}

export async function logIn(username: string, password: string) {
  const res = await fetch(AUTH_ROUTES.logIn.route, {
    method: AUTH_ROUTES.logIn.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const val = await res.json();
  if (!!val.token) {
    sessionStorage.setItem(AUTH_KEY, val.token);
    return true;
  }
  return false;
}

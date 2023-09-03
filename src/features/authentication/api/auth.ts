import { BASE_URL } from "src/constants/API";
import { HttpClient } from "src/lib/httpClient/httpClient";
import { SignInPayload } from "./types";

const AUTH_BASE_URL = BASE_URL + "/accounts";

const httpClient = new HttpClient(AUTH_BASE_URL);

export function signInWithPhone({
  phone,
  password,
  account = "merchant",
  device = "API",
}: SignInPayload) {
  const payload: SignInPayload = {
    phone,
    password,
    account,
    device,
  };

  return httpClient.post({
    url: "/sign-in",
    payload,
    requiresAuthToken: false,
  });
}

export function signOut() {
  return httpClient.post({
    url: "/sign-out",
    requiresAuthToken: true,
    payload: {},
  });
}

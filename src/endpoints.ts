
export const ROOT_ENDPOINT = "https://contacts-webdev-project-contacts.1d35.starter-us-east-1.openshiftapps.com";

export const AUTH_ROUTES = {
  logIn: {
    route: `${ROOT_ENDPOINT}/auth`,
    method: "POST",
  },
  logOut: {
    route: `${ROOT_ENDPOINT}/auth`,
    method: "PUT",
  },
  verifySession: {
    route: `${ROOT_ENDPOINT}/auth`,
    method: "GET",
  },
};

export const MESSAGE_ROUTES = {

};

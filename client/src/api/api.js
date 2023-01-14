const host = "http://localhost:3001";

const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const buildingRoute = `${host}/api/building`;
const verifyGoogleTokenRoute = `${host}/api/verifyGoogleToken`;
const requestsRoute = `${host}/api/requests`;

export {
  host,
  loginRoute,
  registerRoute,
  buildingRoute,
  verifyGoogleTokenRoute,
  requestsRoute
};

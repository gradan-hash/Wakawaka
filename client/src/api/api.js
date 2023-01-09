const host = "http://localhost:3001";

const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const buildingRoute = `${host}/api/building`;
const verifyGoogleTokenRoute = `${host}/api/verifyGoogleToken`;

export {
  host,
  loginRoute,
  registerRoute,
  buildingRoute,
  verifyGoogleTokenRoute,
};

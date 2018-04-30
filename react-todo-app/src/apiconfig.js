const apiVersion = "";
const backendHost =
  process.env.REACT_APP_BACKEND_HOST || "http://localhost:3001";
export const API_ROOT = `${backendHost}/api/${apiVersion}`;

export const BASE_URL = "http://127.0.0.1:3333/";

const AUTH_PREFIX = "auth/";
const BATCH_PREFIX = "batches/";
const USER_PREFIX = "users/";

export const ENDPOINT = {
  login: BASE_URL + AUTH_PREFIX + "login",
  getAllBatches: BASE_URL + BATCH_PREFIX,
  getAllStudents: BASE_URL + USER_PREFIX + "students",
};

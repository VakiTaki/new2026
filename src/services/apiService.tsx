import axios from "axios";

const API_URL = "/api/v1/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const checkAuthEndpoint = "check_auth";
const participateYesEndpoint = "participate_yes";
const participateNoEndpoint = "participate_no";

const getAuthInfo = async (body) => {
  try {
    const { data } = await api.post(checkAuthEndpoint, body);
    return data;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
};

const yesAnswer = async (body) => {
  try {
    const response = await api.post(participateYesEndpoint, body);
    return response.status;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
};

const noAnswer = async (body) => {
  try {
    const response = await api.post(participateNoEndpoint, body);
    return response.status;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
};

export { getAuthInfo, yesAnswer, noAnswer };

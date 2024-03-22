"use server";
import axios from "axios";
export async function axiosClient() {
  const apiKey = process.env.API_KEY;
  const appId = process.env.APP_ID;

  // Define default parameters
  const defaultParams = {
    baseURL: "https://api.edamam.com/api",
    params: { type: "public", app_id: appId, app_key: apiKey, diet: null },
  };
  // Create Axios instance with default parameters
  return axios.create(defaultParams);
}

import axios from "axios";
import config from "../config";

const generateAxios = $config => {
  return axios.create($config);
};

export const axiosService = generateAxios({
  baseURL: config.uri.api,
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

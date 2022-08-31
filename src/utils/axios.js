import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server-api-sahara.herokuapp.com",
});

export default axiosInstance;

// http://localhost:9000
// https://server-api-sahara.herokuapp.com

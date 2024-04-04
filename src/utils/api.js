// api.js
import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 100000,  // 100 seconds
});

export default axiosInstance;
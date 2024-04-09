import axios from 'axios';
// require('dotenv').config();

// Determine the base URL based on the environment
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://strender-backend-1.onrender.com/api/v1/'
  : 'http://localhost:8000/api/v1/';

// const baseUrl = import.meta.env.REACT_APP_API_URL;
console.log(import.meta.env.REACT_APP_API_URL);

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 100000,  // 100 seconds
});

export default axiosInstance;

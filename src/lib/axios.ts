import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { RequestError } from '@interfaces';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_URL,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = ''; //get user token
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: AxiosError<RequestError>) => {
    switch (error.code) {
      case '401':
        console.log('401');
        break;
      default:
    }

    return Promise.reject(error);
  }
);

export { httpClient }
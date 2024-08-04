import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {API_BASE_URL} from '@env';

const httpClient = Axios.create({
  baseURL: API_BASE_URL,
});

// httpClient.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem('access_token');
//     if (!config.headers.Authorization) {
//       config.headers.Authorization = 'LMSToken ' + token;
//     }
//     config.headers.withCredentials = true;

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

export const get = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  try {
    const response = await httpClient.get(url, config);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const post = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  try {
    const response = await httpClient.post(url, data, config);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const put = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  try {
    const response = await httpClient.put(url, data, config);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const patch = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  try {
    const response = await httpClient.patch(url, data, config);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const del = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  try {
    const response = await httpClient.delete(url, config);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

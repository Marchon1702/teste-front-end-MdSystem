import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import Session from '@utils/session';

import appConfig from './App';

// #region API
export const api: AxiosInstance = axios.create({
  baseURL: appConfig.endpoint,
});

interface AuthTokenData {
  accessToken: string;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const authSession = Session.get<AuthTokenData>('auth');

  if (authSession) {
    config.headers.Authorization = `Bearer ${authSession.data.accessToken}`;
  }

  return config;
});
// #endregion

//#region Requisições dos conteúdos
export const getContent: AxiosInstance = axios.create({
  baseURL: "https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php",
  timeout: 10000
})
//#endregion

export default {
  api,
};

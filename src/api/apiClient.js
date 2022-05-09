import axios from 'axios';

const baseURL = 'https://mag2-mobile.fmeplugins.net/mobiledemo/rest';

export const apiClient = axios.create({
  baseURL,
});

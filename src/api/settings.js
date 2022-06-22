import {apiClient} from './apiClient';

async function getSettings() {
  return apiClient.post('/V1/mobapp/mobapi');
}

export default {
  getSettings,
};

import {apiClient} from './apiClient';

async function createCustomer(body) {
  return apiClient.post('/V1/customers', body);
}

async function getCustomerToken(email, password) {
  return apiClient.post('/V1/integration/customer/token', {
    username: email,
    password,
  });
}

async function getCustomerProfile(accessToken) {
  return apiClient.get('/V1/customers/me', {
    headers: {Authorization: `Bearer ${accessToken}`},
  });
}
export const usersApi = {
  createCustomer,
  getCustomerToken,
  getCustomerProfile,
};

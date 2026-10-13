import apiClient from './client';

export const authApi = {
  login: async (credentials) => {
    // Example: return await apiClient.post('/auth/login', credentials);
    // Mocking for template demonstration:
    return { token: 'mock-jwt-token-12345' };
  },
  logout: async () => {
    localStorage.removeItem('auth_token');
  }
};

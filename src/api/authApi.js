import apiClient from "./config/client";

export const authApi = {
  login: async (credentials) => {
    const res = await apiClient.post("/auth/login", credentials);
    console.warn("DEBUGPRINT[4]: authApi.js:6: res=", res);

    // Example: return await apiClient.post('/auth/login', credentials);
    // Mocking for template demonstration:
    return { token: "mock-jwt-token-12345" };
  },
  logout: async () => {
    localStorage.removeItem("auth_token");
  },
};

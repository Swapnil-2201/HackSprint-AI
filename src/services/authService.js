import api from "./api";

const authService = {
  // Login
  async login(credentials) {
    const { data } = await api.post("/auth/login", credentials);

    return data;
  },

  // Register
  async register(payload) {
    const { data } = await api.post("/auth/register", payload);

    return data;
  },

  // Get Logged-in User
  async getProfile() {
    const { data } = await api.get("/auth/profile");

    return data;
  },

  // Update Profile
  async updateProfile(payload) {
    const { data } = await api.put("/auth/profile", payload);

    return data;
  },

  // Change Password
  async changePassword(payload) {
    const { data } = await api.put(
      "/auth/change-password",
      payload
    );

    return data;
  },

  // Logout (Backend Optional)
  async logout() {
    try {
      const { data } = await api.post("/auth/logout");

      return data;
    } catch (error) {
      // Some backends don't implement logout.
      return null;
    }
  },
};

export default authService;
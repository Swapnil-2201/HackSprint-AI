// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const TOKEN_KEY =
  import.meta.env.VITE_AUTH_TOKEN_KEY || "hacksprint_access_token";

const USER_KEY = "hacksprint_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedUser = localStorage.getItem(USER_KEY);

    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(USER_KEY);
      }
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    /*
      Replace this request with your backend endpoint.

      Expected Response:
      {
        token: "...",
        user: {
          id,
          name,
          email
        }
      }
    */

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      credentials
    );

    setToken(data.token);
    setUser(data.user);

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));

    axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    return data;
  };

  const register = async (payload) => {
    /*
      Expected backend response is identical to login.
    */

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      payload
    );

    setToken(data.token);
    setUser(data.user);

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));

    axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    return data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    delete axios.defaults.headers.common.Authorization;
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      authenticated: !!token,
      login,
      register,
      logout,
      updateUser,
    }),
    [user, token, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
}

export default AuthContext;
import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [guestTimedOut, setGuestTimedOut] = useState(false);

  const persistAuth = (token, userData, remember = true) => {
    const consentAccepted = document.cookie.includes("cookieConsent=accepted") || localStorage.getItem("cookieConsent") === "accepted";

    if (remember) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.removeItem("token");
    } else {
      sessionStorage.setItem("token", token);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }

    if (consentAccepted) {
      document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    } else {
      document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    setUser(userData);
    setGuestTimedOut(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setUser(null);
    setGuestTimedOut(false);
  };

  const login = async (credentials, remember = true) => {
    const data = await authApi.login(credentials);
    persistAuth(data.token, data.user, remember);
    return data;
  };

  // `autoLogin` controls whether the user should be signed in immediately after registration.
  const register = async (payload, autoLogin = true) => {
    const data = await authApi.register(payload);
    if (autoLogin) {
      persistAuth(data.token, data.user, true);
    }
    return data;
  };

  const refreshUser = async () => {
    const data = await authApi.getMe();
    setUser(data.user);
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token && localStorage.getItem("token")) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data.user;
  };

  const updateProfile = async (payload) => {
    const data = await authApi.updateProfile(payload);
    setUser(data.user);
    if (localStorage.getItem("token")) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  useEffect(() => {
    const initAuth = async () => {
      const cookieToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];
      const token = localStorage.getItem("token") || sessionStorage.getItem("token") || cookieToken;
      const storedUser = localStorage.getItem("user");

      if (!token) {
        setLoading(false);
        return;
      }

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem("user");
        }
      }

      try {
        const data = await authApi.getMe();
        setUser(data.user);
        if (localStorage.getItem("token")) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        guestTimedOut,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        setGuestTimedOut,
        refreshUser,
        updateProfile,
        persistAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

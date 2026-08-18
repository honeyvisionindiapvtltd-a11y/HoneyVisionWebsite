const PRODUCTION_API_URL = "/api";

const resolveApiBase = () => {
  const configuredUrl = import.meta.env.VITE_API_URL?.trim();

  // Production custom domain: same-origin backend
  if (
    window.location.hostname === "honeyvision.in" ||
    window.location.hostname === "www.honeyvision.in"
  ) {
    return PRODUCTION_API_URL;
  }

  // Vercel/preview deployments should also prefer same-origin API
  // when the backend is hosted under the same app origin.
  if (window.location.hostname.endsWith(".vercel.app")) {
    return "/api";
  }

  // Local development / configured environment
  if (!configuredUrl || configuredUrl === "/api") {
    return "/api";
  }

  const normalized = configuredUrl.replace(/\/$/, "");

  return normalized.endsWith("/api")
    ? normalized
    : `${normalized}/api`;
};

const API_BASE = resolveApiBase();

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const getToken = () =>
  localStorage.getItem("token") ||
  sessionStorage.getItem("token");

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    credentials: "include",
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(
      data.message || "Something went wrong",
      response.status
    );
  }

  return data;
};

export const authApi = {
  register: (payload) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  login: (payload) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  getMe: () => request("/auth/me"),

  updateProfile: (payload) =>
    request("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  changePassword: (payload) =>
    request("/auth/change-password", {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  forgotPassword: (email) =>
    request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  resetPassword: (payload) =>
    request("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  request: (endpoint, options) =>
    request(endpoint, options),
};

export const contactApi = {
  submit: (payload) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export const demoApi = {
  submit: (payload) =>
    request("/demo-requests", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export const productApi = {
  list: () => request("/products"),

  get: (slug) =>
    request(`/products/${slug}`),
};

export const cookieConsentApi = {
  create: (payload) =>
    request("/cookie-consent", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export const cmsApi = {
  list: () => request("/cms"),

  get: (slug) =>
    request(`/cms/${slug}`),
};

export { ApiError };
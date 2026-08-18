/**
 * HoneyVision API Configuration
 *
 * Production backend:
 * https://honeyvisionwebsite.onrender.com
 *
 * API:
 * https://honeyvisionwebsite.onrender.com/api
 */

const PRODUCTION_API_URL =
  "https://honeyvisionwebsite.onrender.com/api";

const LOCAL_API_URL =
  "http://localhost:5000/api";

/* =========================================================
   API BASE URL
   ========================================================= */

const getApiBaseUrl = () => {
  /*
   * Vite environment variable takes priority.
   */
  const envUrl = import.meta.env.VITE_API_URL;

  if (envUrl && envUrl.trim()) {
    return envUrl.trim().replace(/\/+$/, "");
  }

  /*
   * Production website
   */
  if (window.location.hostname === "honeyvision.in") {
    return PRODUCTION_API_URL;
  }

  if (window.location.hostname === "www.honeyvision.in") {
    return PRODUCTION_API_URL;
  }

  /*
   * Local development
   */
  return LOCAL_API_URL;
};

const API_BASE_URL = getApiBaseUrl();

console.log("========================================");
console.log("HoneyVision API");
console.log("========================================");
console.log("API Base URL:", API_BASE_URL);
console.log("Current Host:", window.location.hostname);
console.log("========================================");

/* =========================================================
   TOKEN
   ========================================================= */

const getToken = () => {
  return (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  );
};

/* =========================================================
   API ERROR
   ========================================================= */

class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/* =========================================================
   MAIN REQUEST FUNCTION
   ========================================================= */

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const cleanEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  const url = `${API_BASE_URL}${cleanEndpoint}`;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  /*
   * Add JWT token when available.
   */
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  console.log(
    `[API] ${options.method || "GET"} ${url}`
  );

  try {
    const response = await fetch(url, {
      ...options,

      /*
       * Required because backend has:
       * credentials: true
       */
      credentials: "include",

      headers,
    });

    /*
     * Try to parse JSON.
     */
    const data = await response
      .json()
      .catch(() => ({}));

    if (!response.ok) {
      throw new ApiError(
        data?.message ||
          `Request failed with status ${response.status}`,
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    console.error("========================================");
    console.error("API REQUEST FAILED");
    console.error("========================================");
    console.error("URL:", url);
    console.error("Error:", error);
    console.error("========================================");

    /*
     * Preserve our custom ApiError.
     */
    if (error instanceof ApiError) {
      throw error;
    }

    /*
     * Network/CORS error.
     */
    throw new ApiError(
      "Unable to connect to the server. Please check the backend server and CORS configuration.",
      0,
      {
        originalError: error,
        url,
      }
    );
  }
};

/* =========================================================
   AUTH API
   ========================================================= */

export const authApi = {
  register: (data) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (data) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getMe: () =>
    request("/auth/me"),

  updateProfile: (data) =>
    request("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  changePassword: (data) =>
    request("/auth/change-password", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  forgotPassword: (email) =>
    request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    }),

  resetPassword: (data) =>
    request("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

/* =========================================================
   PRODUCTS API
   ========================================================= */

export const productsApi = {
  /*
   * GET /api/products
   */
  list: () =>
    request("/products"),

  /*
   * GET /api/products/:id
   */
  get: (id) =>
    request(`/products/${id}`),
};

/* =========================================================
   CATEGORIES API
   ========================================================= */

export const categoriesApi = {
  /*
   * GET /api/categories
   */
  list: () =>
    request("/categories"),

  /*
   * GET /api/categories/:id
   */
  get: (id) =>
    request(`/categories/${id}`),
};

/* =========================================================
   CONTACT API
   ========================================================= */

export const contactApi = {
  submit: (data) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

/* =========================================================
   DEMO REQUEST API
   ========================================================= */

export const demoRequestApi = {
  submit: (data) =>
    request("/demo-requests", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

/* =========================================================
   COOKIE CONSENT API
   ========================================================= */

export const cookieConsentApi = {
  create: (data) =>
    request("/cookie-consent", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

/* =========================================================
   CMS API
   ========================================================= */

export const cmsApi = {
  list: () =>
    request("/cms"),

  get: (id) =>
    request(`/cms/${id}`),
};

/* =========================================================
   GENERIC API
   ========================================================= */

export const api = {
  request,
};

/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

export default {
  request,
  auth: authApi,
  products: productsApi,
  categories: categoriesApi,
  contact: contactApi,
  demoRequests: demoRequestApi,
  cookieConsent: cookieConsentApi,
  cms: cmsApi,
};
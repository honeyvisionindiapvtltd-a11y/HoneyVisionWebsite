// ============================================================
// HoneyVision API Service
// ============================================================

const PRODUCTION_API_URL =
  "/api";

const LOCAL_API_URL =
  "http://localhost:5000/api";

// ============================================================
// API BASE URL
// ============================================================

const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;

  if (envUrl && envUrl.trim()) {
    return envUrl.trim().replace(/\/+$/, "");
  }

  const hostname = window.location.hostname;

  if (
    hostname === "honeyvision.in" ||
    hostname === "www.honeyvision.in"
  ) {
    return PRODUCTION_API_URL;
  }

  return LOCAL_API_URL;
};

export const API_BASE_URL = getApiBaseUrl();

// ============================================================
// DEBUG
// ============================================================

console.log("========================================");
console.log("HoneyVision API Configuration");
console.log("========================================");
console.log("API BASE URL:", API_BASE_URL);
console.log("Current hostname:", window.location.hostname);
console.log("Environment:", import.meta.env.MODE);
console.log("========================================");

// ============================================================
// API ERROR
// ============================================================

export class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

// ============================================================
// TOKEN
// ============================================================

const getToken = () => {
  try {
    return (
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      null
    );
  } catch (error) {
    console.warn("Unable to access browser storage:", error);
    return null;
  }
};

// ============================================================
// REQUEST HELPER
// ============================================================

export const request = async (
  endpoint,
  options = {}
) => {
  const cleanEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  const url = `${API_BASE_URL}${cleanEndpoint}`;

  const token = getToken();

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  console.log(
    `[HoneyVision API] ${
      options.method || "GET"
    } ${url}`
  );

  try {
    const response = await fetch(url, {
      ...options,

      // Required for backend credentials: true
      credentials: "include",

      headers,
    });

    const contentType =
      response.headers.get("content-type") || "";

    let data;

    if (contentType.includes("application/json")) {
      data = await response.json().catch(() => ({}));
    } else {
      const text = await response.text().catch(() => "");
      data = text ? { message: text } : {};
    }

    if (!response.ok) {
      throw new ApiError(
        data?.message ||
          data?.error ||
          `Request failed with status ${response.status}`,
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    console.error("========================================");
    console.error("HoneyVision API Request Failed");
    console.error("========================================");
    console.error("URL:", url);
    console.error("Error:", error);
    console.error("========================================");

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      "Unable to connect to the HoneyVision backend.",
      0,
      {
        originalError: error,
        url,
      }
    );
  }
};

// ============================================================
// AUTH API
// ============================================================

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

// ============================================================
// PRODUCT API
// ============================================================

export const productApi = {
  // GET /api/products
  list: () =>
    request("/products"),

  // GET /api/products/:id
  get: (id) =>
    request(`/products/${id}`),
};

// ============================================================
// DEMO API
// ============================================================

export const demoApi = {
  // POST /api/demo-requests
  submit: (data) =>
    request("/demo-requests", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// ============================================================
// CONTACT API
// ============================================================

export const contactApi = {
  // POST /api/contact
  submit: (data) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// ============================================================
// CATEGORY API
// ============================================================

export const categoryApi = {
  // GET /api/categories
  list: () =>
    request("/categories"),

  // GET /api/categories/:id
  get: (id) =>
    request(`/categories/${id}`),
};

// ============================================================
// COOKIE CONSENT API
// ============================================================

export const cookieConsentApi = {
  // POST /api/cookie-consent
  create: (data) =>
    request("/cookie-consent", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// ============================================================
// CMS API
// ============================================================

export const cmsApi = {
  // GET /api/cms
  list: () =>
    request("/cms"),

  // GET /api/cms/:id
  get: (id) =>
    request(`/cms/${id}`),
};

// ============================================================
// GENERIC API OBJECT
// ============================================================

export const api = {
  request,

  auth: authApi,

  products: productApi,

  product: productApi,

  demo: demoApi,

  contact: contactApi,

  categories: categoryApi,

  category: categoryApi,

  cookieConsent: cookieConsentApi,

  cms: cmsApi,
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default api;
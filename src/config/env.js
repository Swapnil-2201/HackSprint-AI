// src/config/env.js

const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "HackSprint AI Coach",

  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",

  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:5000/api",

  AI_API_URL:
    import.meta.env.VITE_AI_API_URL ||
    "http://localhost:8000",

  GOOGLE_MAPS_API_KEY:
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",

  FIREBASE_API_KEY:
    import.meta.env.VITE_FIREBASE_API_KEY || "",

  FIREBASE_AUTH_DOMAIN:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",

  FIREBASE_PROJECT_ID:
    import.meta.env.VITE_FIREBASE_PROJECT_ID || "",

  FIREBASE_STORAGE_BUCKET:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",

  FIREBASE_MESSAGING_SENDER_ID:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",

  FIREBASE_APP_ID:
    import.meta.env.VITE_FIREBASE_APP_ID || "",

  NODE_ENV: import.meta.env.MODE,

  IS_DEV: import.meta.env.DEV,

  IS_PROD: import.meta.env.PROD,
};

export default env;
// ─── Backend Base ────────────────────────────────────────────────────────────
export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3000';

// ─── Next.js Internal API Proxy Base ─────────────────────────────────────────
export const API_BASE = '/api';

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const AUTH_ROUTES = {
  LOGIN: `${API_BASE}/auth/login`,
  FORGOT_PASSWORD: `${API_BASE}/auth/forgot-password`,
  RESET_PASSWORD: `${API_BASE}/auth/reset-password`,
  REFRESH_TOKEN: `${API_BASE}/auth/refresh-token`,
  ME: `${API_BASE}/auth/me`,
  UPDATE_PROFILE: `${API_BASE}/auth/me`,
  UPLOAD_AVATAR: `${API_BASE}/auth/me/avatar`,
} as const;

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS_ROUTES = {
  BASE: `${API_BASE}/skills`,
  USER: `${API_BASE}/skills/user`,
  BY_ID: (id: string) => `${API_BASE}/skills/${id}`,
} as const;

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS_ROUTES = {
  BASE: `${API_BASE}/projects`,
  USER: `${API_BASE}/projects/user`,
  BY_ID: (id: string) => `${API_BASE}/projects/${id}`,
} as const;

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION_ROUTES = {
  BASE: `${API_BASE}/education`,
  USER: `${API_BASE}/education/user`,
  BY_ID: (id: string) => `${API_BASE}/education/${id}`,
} as const;

// ─── Work Experience ──────────────────────────────────────────────────────────
export const WORK_EXPERIENCE_ROUTES = {
  BASE: `${API_BASE}/work-experience`,
  USER: `${API_BASE}/work-experience/user`,
  BY_ID: (id: string) => `${API_BASE}/work-experience/${id}`,
} as const;

// ─── Achievements ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS_ROUTES = {
  BASE: `${API_BASE}/achievements`,
  USER: `${API_BASE}/achievements/user`,
  BY_ID: (id: string) => `${API_BASE}/achievements/${id}`,
} as const;

// ─── Certificates ─────────────────────────────────────────────────────────────
export const CERTIFICATES_ROUTES = {
  BASE: `${API_BASE}/certificates`,
  USER: `${API_BASE}/certificates/user`,
  BY_ID: (id: string) => `${API_BASE}/certificates/${id}`,
} as const;

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const TIMELINE_ROUTES = {
  BASE: `${API_BASE}/timeline`,
  USER: `${API_BASE}/timeline/user`,
  BY_ID: (id: string) => `${API_BASE}/timeline/${id}`,
} as const;

// ─── Upload ───────────────────────────────────────────────────────────────────
export const UPLOAD_ROUTES = {
  FILE: `${API_BASE}/upload/file`,
  COMPRESSED: `${API_BASE}/upload/compressed`,
} as const;

// ─── User Queries ─────────────────────────────────────────────────────────────
export const USER_QUERIES_ROUTES = {
  BASE: `${API_BASE}/user-queries`,
  BY_ID: (id: string) => `${API_BASE}/user-queries/${id}`,
} as const;

// ─── Health ───────────────────────────────────────────────────────────────────
export const HEALTH_ROUTES = {
  BASE: `${API_BASE}/health`,
  LAST: `${API_BASE}/health/last`,
  DATABASE: `${API_BASE}/health/database`,
  SERVER: `${API_BASE}/health/server`,
  MEMORY: `${API_BASE}/health/memory`,
} as const;

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
} as const;

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

// ─── Primitive helpers ────────────────────────────────────────────────────────

function safeGet(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch {
    console.error(`[Storage] Failed to set key: ${key}`);
  }
}

function safeRemove(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch {
    console.error(`[Storage] Failed to remove key: ${key}`);
  }
}

// ─── Token helpers ────────────────────────────────────────────────────────────

export const StorageService = {
  // Tokens
  getAccessToken: (): string | null => safeGet(STORAGE_KEYS.ACCESS_TOKEN),

  setAccessToken: (token: string): void => safeSet(STORAGE_KEYS.ACCESS_TOKEN, token),

  getRefreshToken: (): string | null => safeGet(STORAGE_KEYS.REFRESH_TOKEN),

  setRefreshToken: (token: string): void => safeSet(STORAGE_KEYS.REFRESH_TOKEN, token),

  clearTokens: (): void => {
    safeRemove(STORAGE_KEYS.ACCESS_TOKEN);
    safeRemove(STORAGE_KEYS.REFRESH_TOKEN);
  },

  // User
  getUser: <T = unknown>(): T | null => {
    const raw = safeGet(STORAGE_KEYS.USER);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },

  setUser: <T>(user: T): void => {
    safeSet(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  clearUser: (): void => safeRemove(STORAGE_KEYS.USER),

  // Generic
  get: <T = string>(key: StorageKey): T | null => {
    const raw = safeGet(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return raw as unknown as T;
    }
  },

  set: <T>(key: StorageKey, value: T): void => {
    const serialized = typeof value === 'string' ? value : JSON.stringify(value);
    safeSet(key, serialized);
  },

  remove: (key: StorageKey): void => safeRemove(key),

  // Session clear
  clearAll: (): void => {
    Object.values(STORAGE_KEYS).forEach(safeRemove);
  },
};

import { http } from '@/lib/http';
import { AUTH_ROUTES } from '@/constants/api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
}

export interface UpdateProfilePayload {
  name?: string;
  bio?: string;
  [key: string]: unknown;
}

export const AuthApi = {
  login: (payload: LoginPayload) => http.post<AuthResponse>(AUTH_ROUTES.LOGIN, payload),

  forgotPassword: (payload: ForgotPasswordPayload) =>
    http.post<{ message: string }>(AUTH_ROUTES.FORGOT_PASSWORD, payload),

  resetPassword: (payload: ResetPasswordPayload) =>
    http.post<{ message: string }>(AUTH_ROUTES.RESET_PASSWORD, payload),

  refreshToken: (refreshToken: string) =>
    http.post<{ accessToken: string }>(AUTH_ROUTES.REFRESH_TOKEN, {
      refreshToken,
    }),

  getProfile: () => http.get<UserProfile>(AUTH_ROUTES.ME),

  updateProfile: (payload: UpdateProfilePayload) =>
    http.put<UserProfile>(AUTH_ROUTES.UPDATE_PROFILE, payload),

  uploadAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return http.postForm<UserProfile>(AUTH_ROUTES.UPLOAD_AVATAR, formData);
  },
};

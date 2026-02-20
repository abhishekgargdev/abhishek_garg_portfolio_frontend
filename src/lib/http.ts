import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axios';

// ─── Backend standard envelope ────────────────────────────────────────────────

export interface BackendResponse<T> {
  success: boolean;
  message: string;
  data: T;
  statusCode: number;
}

// ─── Unwrap the envelope — callers get T directly ─────────────────────────────

function extractData<T>(response: AxiosResponse<BackendResponse<T>>): T {
  const { success, message, data } = response.data;

  if (!success) {
    // Throw so axios error interceptor / catch blocks handle it uniformly
    throw new Error(message ?? 'Something went wrong');
  }

  return data;
}

// ─── HTTP Methods ─────────────────────────────────────────────────────────────

export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.get<BackendResponse<T>>(url, config);
    return extractData(response);
  },

  post: async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.post<BackendResponse<T>>(url, data, config);
    return extractData(response);
  },

  put: async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.put<BackendResponse<T>>(url, data, config);
    return extractData(response);
  },

  patch: async <T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.patch<BackendResponse<T>>(url, data, config);
    return extractData(response);
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.delete<BackendResponse<T>>(url, config);
    return extractData(response);
  },

  postForm: async <T>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.post<BackendResponse<T>>(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config?.headers,
      },
    });
    return extractData(response);
  },
};

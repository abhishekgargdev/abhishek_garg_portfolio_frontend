import { http } from '@/lib/http';
import { UPLOAD_ROUTES } from '@/constants/api';

export interface UploadResponse {
  url: string;
  publicId?: string;
  format?: string;
  size?: number;
}

export const UploadApi = {
  uploadFile: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return http.postForm<UploadResponse>(UPLOAD_ROUTES.FILE, formData);
  },

  uploadCompressed: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return http.postForm<UploadResponse>(UPLOAD_ROUTES.COMPRESSED, formData);
  },

  deleteFile: (publicId: string) =>
    http.delete<{ message: string }>(UPLOAD_ROUTES.FILE, {
      data: { publicId },
    }),
};

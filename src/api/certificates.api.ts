import { http } from '@/lib/http';
import { CERTIFICATES_ROUTES } from '@/constants/api';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

export type CreateCertificatePayload = Omit<Certificate, 'id'>;
export type UpdateCertificatePayload = Partial<CreateCertificatePayload>;

export const CertificatesApi = {
  create: (payload: CreateCertificatePayload) =>
    http.post<Certificate>(CERTIFICATES_ROUTES.BASE, payload),

  getAll: () => http.get<Certificate[]>(CERTIFICATES_ROUTES.BASE),

  getByUser: () => http.get<Certificate[]>(CERTIFICATES_ROUTES.USER),

  getById: (id: string) => http.get<Certificate>(CERTIFICATES_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateCertificatePayload) =>
    http.put<Certificate>(CERTIFICATES_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(CERTIFICATES_ROUTES.BY_ID(id)),
};

import { http } from '@/lib/http';
import { EDUCATION_ROUTES } from '@/constants/api';

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  grade?: string;
  description?: string;
}

export type CreateEducationPayload = Omit<Education, 'id'>;
export type UpdateEducationPayload = Partial<CreateEducationPayload>;

export const EducationApi = {
  create: (payload: CreateEducationPayload) => http.post<Education>(EDUCATION_ROUTES.BASE, payload),

  getAll: () => http.get<Education[]>(EDUCATION_ROUTES.BASE),

  getByUser: () => http.get<Education[]>(EDUCATION_ROUTES.USER),

  getById: (id: string) => http.get<Education>(EDUCATION_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateEducationPayload) =>
    http.put<Education>(EDUCATION_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(EDUCATION_ROUTES.BY_ID(id)),
};

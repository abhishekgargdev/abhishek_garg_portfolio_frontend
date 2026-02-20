import { http } from '@/lib/http';
import { WORK_EXPERIENCE_ROUTES } from '@/constants/api';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  techStack?: string[];
}

export type CreateWorkExperiencePayload = Omit<WorkExperience, 'id'>;
export type UpdateWorkExperiencePayload = Partial<CreateWorkExperiencePayload>;

export const WorkExperienceApi = {
  create: (payload: CreateWorkExperiencePayload) =>
    http.post<WorkExperience>(WORK_EXPERIENCE_ROUTES.BASE, payload),

  getAll: () => http.get<WorkExperience[]>(WORK_EXPERIENCE_ROUTES.BASE),

  getByUser: () => http.get<WorkExperience[]>(WORK_EXPERIENCE_ROUTES.USER),

  getById: (id: string) => http.get<WorkExperience>(WORK_EXPERIENCE_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateWorkExperiencePayload) =>
    http.put<WorkExperience>(WORK_EXPERIENCE_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(WORK_EXPERIENCE_ROUTES.BY_ID(id)),
};

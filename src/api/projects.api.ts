import { http } from '@/lib/http';
import { PROJECTS_ROUTES } from '@/constants/api';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  featured?: boolean;
}

export type CreateProjectPayload = Omit<Project, 'id'>;
export type UpdateProjectPayload = Partial<CreateProjectPayload>;

export const ProjectsApi = {
  create: (payload: CreateProjectPayload) => http.post<Project>(PROJECTS_ROUTES.BASE, payload),

  getAll: () => http.get<Project[]>(PROJECTS_ROUTES.BASE),

  getByUser: () => http.get<Project[]>(PROJECTS_ROUTES.USER),

  getById: (id: string) => http.get<Project>(PROJECTS_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateProjectPayload) =>
    http.put<Project>(PROJECTS_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(PROJECTS_ROUTES.BY_ID(id)),
};

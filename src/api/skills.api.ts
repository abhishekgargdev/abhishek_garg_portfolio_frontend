import { http } from '@/lib/http';
import { SKILLS_ROUTES } from '@/constants/api';

export interface Skill {
  id: string;
  name: string;
  level?: string;
  category?: string;
  icon?: string;
}

export type CreateSkillPayload = Omit<Skill, 'id'>;
export type UpdateSkillPayload = Partial<CreateSkillPayload>;

export const SkillsApi = {
  create: (payload: CreateSkillPayload) => http.post<Skill>(SKILLS_ROUTES.BASE, payload),

  getAll: () => http.get<Skill[]>(SKILLS_ROUTES.BASE),

  getByUser: () => http.get<Skill[]>(SKILLS_ROUTES.USER),

  getById: (id: string) => http.get<Skill>(SKILLS_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateSkillPayload) =>
    http.put<Skill>(SKILLS_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(SKILLS_ROUTES.BY_ID(id)),
};

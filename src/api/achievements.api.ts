import { http } from '@/lib/http';
import { ACHIEVEMENTS_ROUTES } from '@/constants/api';

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  date?: string;
  issuer?: string;
  url?: string;
}

export type CreateAchievementPayload = Omit<Achievement, 'id'>;
export type UpdateAchievementPayload = Partial<CreateAchievementPayload>;

export const AchievementsApi = {
  create: (payload: CreateAchievementPayload) =>
    http.post<Achievement>(ACHIEVEMENTS_ROUTES.BASE, payload),

  getAll: () => http.get<Achievement[]>(ACHIEVEMENTS_ROUTES.BASE),

  getByUser: () => http.get<Achievement[]>(ACHIEVEMENTS_ROUTES.USER),

  getById: (id: string) => http.get<Achievement>(ACHIEVEMENTS_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateAchievementPayload) =>
    http.put<Achievement>(ACHIEVEMENTS_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(ACHIEVEMENTS_ROUTES.BY_ID(id)),
};

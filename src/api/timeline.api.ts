import { http } from '@/lib/http';
import { TIMELINE_ROUTES } from '@/constants/api';

export interface Timeline {
  id: string;
  title: string;
  description?: string;
  date: string;
  type?: string;
  icon?: string;
}

export type CreateTimelinePayload = Omit<Timeline, 'id'>;
export type UpdateTimelinePayload = Partial<CreateTimelinePayload>;

export const TimelineApi = {
  create: (payload: CreateTimelinePayload) => http.post<Timeline>(TIMELINE_ROUTES.BASE, payload),

  getAll: () => http.get<Timeline[]>(TIMELINE_ROUTES.BASE),

  getByUser: () => http.get<Timeline[]>(TIMELINE_ROUTES.USER),

  getById: (id: string) => http.get<Timeline>(TIMELINE_ROUTES.BY_ID(id)),

  update: (id: string, payload: UpdateTimelinePayload) =>
    http.put<Timeline>(TIMELINE_ROUTES.BY_ID(id), payload),

  delete: (id: string) => http.delete<{ message: string }>(TIMELINE_ROUTES.BY_ID(id)),
};

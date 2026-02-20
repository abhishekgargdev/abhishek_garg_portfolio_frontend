import { http } from '@/lib/http';
import { USER_QUERIES_ROUTES } from '@/constants/api';

export interface UserQuery {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export type CreateUserQueryPayload = Omit<UserQuery, 'id' | 'createdAt'>;

export const UserQueriesApi = {
  // Public — no auth needed (contact form)
  create: (payload: CreateUserQueryPayload) =>
    http.post<UserQuery>(USER_QUERIES_ROUTES.BASE, payload),

  getAll: () => http.get<UserQuery[]>(USER_QUERIES_ROUTES.BASE),

  getById: (id: string) => http.get<UserQuery>(USER_QUERIES_ROUTES.BY_ID(id)),

  delete: (id: string) => http.delete<{ message: string }>(USER_QUERIES_ROUTES.BY_ID(id)),
};

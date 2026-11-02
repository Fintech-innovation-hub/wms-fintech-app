import type { User } from "../types/auth";

// Начальный массив пользователей по умолчанию
export const DEFAULT_USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    phone: "+998 90 123 45 67",
    country: "Uzbekistan",
    role: "Admin",
  },
  {
    id: "2",
    name: "Abduqodir",
    email: "abduqodir@example.com",
    password: "password123",
    phone: "+998 99 987 65 43",
    country: "Uzbekistan",
    role: "Developer",
  },
  {
    id: "3",
    name: "Demo User",
    email: "demo@example.com",
    password: "123",
    phone: "+998 93 111 22 33",
    country: "Uzbekistan",
    role: "User",
  },
];

export const USERS_STORAGE_KEY = "vms_users_list";
export const CURRENT_USER_KEY = "vms_current_user";

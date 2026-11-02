import React, { useState, useEffect } from "react";
import type { User } from "../types/auth";
import { AuthContext } from "./authContextInstance";
import { DEFAULT_USERS, USERS_STORAGE_KEY, CURRENT_USER_KEY } from "./authConstants";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Инициализация массива пользователей из localStorage или DEFAULT_USERS
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load users from localStorage", e);
    }
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  });

  // 2. Текущий авторизованный пользователь из localStorage
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load current user from localStorage", e);
    }
    return null;
  });

  // Синхронизация массива пользователей в localStorage при изменении
  useEffect(() => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error("Failed to sync users to localStorage", e);
    }
  }, [users]);

  // Функция входа (логин)
  const login = (email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // Проверка 1: поиск человека в массиве
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === cleanEmail
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Foydalanuvchi topilmadi! / Пользователь с таким email не найден.",
      };
    }

    // Проверка 2: правильность пароля
    if (existingUser.password !== cleanPassword) {
      return {
        success: false,
        message: "Noto'g'ri parol! / Неверный пароль.",
      };
    }

    // Успешная авторизация: сохраняем в state и localStorage
    setUser(existingUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(existingUser));

    return {
      success: true,
      message: "Muvaffaqiyatli kirdingiz! / Вход выполнен успешно!",
    };
  };

  // Функция регистрации нового пользователя в массив и localStorage
  const register = (userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    country?: string;
  }) => {
    const cleanEmail = userData.email.trim().toLowerCase();

    // Проверка: существует ли уже такой email
    const alreadyExists = users.some(
      (u) => u.email.toLowerCase() === cleanEmail
    );

    if (alreadyExists) {
      return {
        success: false,
        message: "Bu email bilan foydalanuvchi allaqachon mavjud! / Пользователь с таким email уже существует.",
      };
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name.trim(),
      email: cleanEmail,
      password: userData.password.trim(),
      phone: userData.phone?.trim() || "+998 90 000 00 00",
      country: userData.country?.trim() || "Uzbekistan",
      role: "User",
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Сразу авторизуем нового пользователя
    setUser(newUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return {
      success: true,
      message: "Ro'yxatdan muvaffaqiyatli o'tdingiz! / Регистрация успешна!",
    };
  };

  // Выход из системы
  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

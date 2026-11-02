export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  country?: string;
  role?: string;
}

export interface AuthContextType {
  user: User | null;
  users: User[];
  isAuthenticated: boolean;
  login: (email: string, password: string) => { success: boolean; message?: string };
  register: (userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    country?: string;
  }) => { success: boolean; message?: string };
  logout: () => void;
}

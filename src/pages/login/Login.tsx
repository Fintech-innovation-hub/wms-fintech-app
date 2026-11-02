import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/useAuth";

export const Login: React.FC = () => {
  const { user, login, register, users, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showUsersList, setShowUsersList] = useState(false);

  // Путь перенаправления после входа (по умолчанию /userprofile)
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/userprofile";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!email.trim() || !password.trim()) {
      setError("Barcha majburiy maydonlarni to'ldiring / Заполните все обязательные поля");
      return;
    }

    if (isRegisterMode && !name.trim()) {
      setError("Ismingizni kiriting / Введите имя");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (isRegisterMode) {
        const result = register({
          name,
          email,
          password,
          phone: phone || undefined,
        });

        if (!result.success) {
          setError(result.message || "Xatolik yuz berdi");
          setIsLoading(false);
          return;
        }

        setSuccessMsg("Muvaffaqiyatli ro'yxatdan o'tdingiz! Yo'naltirilmoqda...");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 600);
      } else {
        const result = login(email, password);

        if (!result.success) {
          setError(result.message || "Xatolik yuz berdi");
          setIsLoading(false);
          return;
        }

        setSuccessMsg("Muvaffaqiyatli kirdingiz! Yo'naltirilmoqda...");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 600);
      }
      setIsLoading(false);
    }, 300);
  };

  // Быстрый выбор тестового пользователя
  const handleQuickSelect = (quickEmail: string, quickPass: string) => {
    setEmail(quickEmail);
    setPassword(quickPass);
    setError("");
  };

  // Если пользователь уже авторизован
  if (user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Siz allaqachon tizimdasiz</h2>
          <p className="text-sm text-slate-500 mt-2">
            Hozirgi foydalanuvchi: <span className="font-semibold text-blue-600">{user.name}</span> ({user.email})
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => navigate("/userprofile")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-md"
            >
              Profilga o'tish (UserProfile)
            </button>
            <button
              onClick={() => logout()}
              className="w-full border border-red-300 text-red-600 hover:bg-red-50 font-medium py-2.5 rounded-lg transition-colors"
            >
              Chiqish (Logout)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 py-10 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        
        {/* Заголовок */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {isRegisterMode ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {isRegisterMode
              ? "Yangi foydalanuvchi ma'lumotlarini kiriting"
              : "Hisobingizga kirish uchun ma'lumotlarni kiriting"}
          </p>
        </div>

        {/* Переключатель режима: Вход / Регистрация */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(false);
              setError("");
              setSuccessMsg("");
            }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              !isRegisterMode
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Kirish (Login)
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(true);
              setError("");
              setSuccessMsg("");
            }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              isRegisterMode
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        {/* Сообщения об ошибке / успехе */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm mb-4 flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-3 rounded-lg text-sm mb-4 flex items-center gap-2">
            <span>✅</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegisterMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Ism (Full Name) *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ali Valiyev"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50 transition-all"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ism@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Parol *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50 transition-all"
              required
            />
          </div>

          {isRegisterMode && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Telefon raqam
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50 transition-all"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-500/20 disabled:bg-blue-300 mt-2"
          >
            {isLoading
              ? "Yuklanmoqda..."
              : isRegisterMode
              ? "Ro'yxatdan o'tish"
              : "Kirish (Login)"}
          </button>
        </form>

        {/* Быстрые аккаунты для тестирования */}
        {!isRegisterMode && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Tezkor sinov uchun hisoblar (Quick Test):
            </p>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => handleQuickSelect("john@example.com", "password123")}
                className="w-full text-left text-xs p-2 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition flex justify-between items-center"
              >
                <span><strong>john@example.com</strong> (Admin)</span>
                <span className="text-slate-400 font-mono text-[11px]">password123</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect("abduqodir@example.com", "password123")}
                className="w-full text-left text-xs p-2 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition flex justify-between items-center"
              >
                <span><strong>abduqodir@example.com</strong></span>
                <span className="text-slate-400 font-mono text-[11px]">password123</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect("demo@example.com", "123")}
                className="w-full text-left text-xs p-2 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition flex justify-between items-center"
              >
                <span><strong>demo@example.com</strong></span>
                <span className="text-slate-400 font-mono text-[11px]">123</span>
              </button>
            </div>
          </div>
        )}

        {/* Инспектор базы данных (LocalStorage / Массив) */}
        <div className="mt-4 pt-4 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={() => setShowUsersList(!showUsersList)}
            className="text-xs text-blue-600 hover:underline"
          >
            {showUsersList
              ? "Yashirish: Massivdagi foydalanuvchilar"
              : `LocalStorage / Massivdagi foydalanuvchilar (${users.length})`}
          </button>

          {showUsersList && (
            <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs max-h-40 overflow-y-auto font-mono text-slate-700">
              <div className="font-bold text-slate-900 mb-1">
                LocalStorage (vms_users_list):
              </div>
              <ul className="space-y-1 list-disc pl-4">
                {users.map((u) => (
                  <li key={u.id}>
                    {u.name} — <span className="text-blue-600">{u.email}</span> (parol: {u.password})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;

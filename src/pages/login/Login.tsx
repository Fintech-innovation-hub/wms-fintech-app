import { useState, type SubmitEvent } from "react";

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Barcha maydonlarni to\'ldiring');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Backendga so'rov yuborish (vaqtincha kutish)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Kirish muvaffaqiyatli:', { email, password });
    } catch {
      setError('Xatolik yuz berdi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-blue-100">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Tizimga kirish</h2>
          <p className="text-sm text-blue-500 mt-1">Hisobingizga kirish uchun ma'lumotlarni kiriting</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ism@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-blue-50/30 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
              Parol
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-blue-50/30 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-500/30 disabled:bg-blue-300"
          >
            {isLoading ? 'Yuklanmoqda...' : 'Kirish'}
          </button>
        </form>

      </div>
    </div>
  );
};
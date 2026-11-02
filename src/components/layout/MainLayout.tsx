import { Outlet, Link } from "react-router";
import Header from "../Header";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  WMS <span className="text-indigo-400">Fintech</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Zamonaviy texnika, elektronika va smart gadjetlar olami. Tez, xavfsiz va ishonchli xarid qilish tizimi.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                  ⚡ 24/7 Tezkor xizmat
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  ✓ Kafolatlangan sifat
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Sahifalar
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                    Bosh sahifa
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link to="/basket" className="text-slate-400 hover:text-white transition-colors">
                    Savat
                  </Link>
                </li>
                <li>
                  <Link to="/userprofile" className="text-slate-400 hover:text-white transition-colors">
                    Foydalanuvchi profili
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-slate-400 hover:text-white transition-colors">
                    Tizimga kirish
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Kategoriyalar
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    Noutbuklar & PC
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    Smartfonlar & Gadjetlar
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    Aksessuarlar & Quloqchinlar
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    Smart soatlar
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    Planshetlar
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Bog'lanish
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span>📍 Toshkent sh., Innovatsiya markazi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞 +998 (71) 200-00-00</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️ support@wms-fintech.uz</span>
                </li>
                <li className="mt-3 pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-500">Ish vaqti: 09:00 - 21:00 (Har kuni)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 WMS Fintech Hub. Barcha huquqlar himoyalangan.</p>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-400 cursor-pointer transition">Maxfiylik siyosati</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer transition">Foydalanish shartlari</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer transition">Xavfsizlik kafolati</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;

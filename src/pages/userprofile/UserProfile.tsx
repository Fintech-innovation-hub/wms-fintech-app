import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router";

function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-100">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
              {user?.name ? user.name.charAt(0).toUpperCase() : "👤"}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {user?.name || "Foydalanuvchi"}
              </h1>
              <p className="text-gray-500">
                {user?.email || "email@example.com"}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Tizimda faol (Active)
                </span>
                {user?.role && (
                  <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="self-start sm:self-center px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition cursor-pointer"
          >
            Chiqish (Logout)
          </button>
        </div>

        <hr className="mb-6 border-slate-100" />

        <h2 className="text-lg font-semibold mb-4 text-slate-800">
          Shaxsiy ma'lumotlar (Personal Information)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-gray-400 font-medium">To'liq ism (Full Name)</p>
            <p className="font-semibold text-slate-800 text-base mt-0.5">{user?.name || "-"}</p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-gray-400 font-medium">Email</p>
            <p className="font-semibold text-slate-800 text-base mt-0.5">{user?.email || "-"}</p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-gray-400 font-medium">Telefon (Phone)</p>
            <p className="font-semibold text-slate-800 text-base mt-0.5">{user?.phone || "+998 90 123 45 67"}</p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-gray-400 font-medium">Mamlakat (Country)</p>
            <p className="font-semibold text-slate-800 text-base mt-0.5">{user?.country || "Uzbekistan"}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium text-sm">
            Tahrirlash (Edit Profile)
          </button>

          <button className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition font-medium text-sm text-slate-700">
            Sozlamalar (Settings)
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

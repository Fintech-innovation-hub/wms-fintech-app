import { useState } from "react";
import { Link } from "react-router";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@fintech.uz",
    phone: "+998 (90) 123-45-67",
    city: "Toshkent",
    address: "Amir Temur shoh ko'chasi, 107-uy",
  });
  const [tempProfile, setTempProfile] = useState(profile);
  const [saveToast, setSaveToast] = useState(false);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold animate-slide-up">
          <span>✓</span>
          <span>Ma'lumotlar muvaffaqiyatli saqlandi!</span>
        </div>
      )}

      {/* Profile Card Header */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
        {/* Decorative banner */}
        <div className="h-36 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
        </div>

        <div className="px-6 sm:px-10 pb-8 pt-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16 mb-6">
            {/* Avatar & Basic Info */}
            <div className="flex items-end gap-5">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl bg-white p-1.5 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white" title="Onlayn" />
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-slate-900">
                    {profile.firstName} {profile.lastName}
                  </h1>
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    Faol mijoz
                  </span>
                </div>
                <p className="text-sm text-slate-500">{profile.email}</p>
              </div>
            </div>

            {/* Edit / Action Buttons */}
            <div className="flex items-center gap-3">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setTempProfile(profile);
                      setIsEditing(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="cursor-pointer px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition"
                  >
                    Saqlash
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="cursor-pointer px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Tahrirlash
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <span className="text-2xl font-black text-indigo-600">12</span>
              <p className="text-xs font-semibold text-slate-500 mt-1">Buyurtmalar</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <span className="text-2xl font-black text-indigo-600">5</span>
              <p className="text-xs font-semibold text-slate-500 mt-1">Sevimlilar</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <span className="text-2xl font-black text-indigo-600">350</span>
              <p className="text-xs font-semibold text-slate-500 mt-1">Bonus ballar</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <span className="text-2xl font-black text-emerald-600">Premium</span>
              <p className="text-xs font-semibold text-slate-500 mt-1">Status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Personal Details */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Shaxsiy ma'lumotlar
            </h3>
            <span className="text-xs text-slate-400">
              {isEditing ? "Tahrirlash rejimi faol" : "Ko'rish rejimi"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Ism
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.firstName}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              ) : (
                <p className="text-base font-semibold text-slate-900">
                  {profile.firstName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Familiya
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.lastName}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              ) : (
                <p className="text-base font-semibold text-slate-900">
                  {profile.lastName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Telefon raqam
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.phone}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              ) : (
                <p className="text-base font-semibold text-slate-900">
                  {profile.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Shahar
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.city}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, city: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              ) : (
                <p className="text-base font-semibold text-slate-900">
                  {profile.city}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Yetkazib berish manzili
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempProfile.address}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, address: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              ) : (
                <p className="text-base font-semibold text-slate-900">
                  {profile.address}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Menu / Actions */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
            Qulay havolalar
          </h3>

          <div className="space-y-2">
            <Link
              to="/basket"
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">🛒</span>
                <span>Savatchaga o'tish</span>
              </div>
              <span className="text-slate-400">→</span>
            </Link>

            <Link
              to="/"
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">📦</span>
                <span>Mahsulotlar katalogi</span>
              </div>
              <span className="text-slate-400">→</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-purple-50 text-purple-600 rounded-xl">ℹ️</span>
                <span>Kompaniya haqida</span>
              </div>
              <span className="text-slate-400">→</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/login"
              className="w-full flex items-center justify-center gap-2 py-3 border border-rose-200 text-rose-600 hover:bg-rose-50 text-sm font-semibold rounded-xl transition"
            >
              Profildan chiqish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;


function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-md p-8">

        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
            👤
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              John Doe
            </h1>
            <p className="text-gray-500">
              john.doe@gmail.com
            </p>
            <span className="text-sm text-green-600">
              ● Active user
            </span>
          </div>
        </div>

        <hr className="mb-6" />

        <h2 className="text-lg font-semibold mb-4">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-sm text-gray-400">First Name</p>
            <p className="font-medium">John</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Last Name</p>
            <p className="font-medium">Doe</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium">+998 90 123 45 67</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Country</p>
            <p className="font-medium">Uzbekistan</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>

          <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
            Settings
          </button>
        </div>
          <h1>Salom</h1>
      </div>
    </div>
  )
}

export default UserProfile

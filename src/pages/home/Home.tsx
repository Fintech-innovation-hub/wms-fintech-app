import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">WMS Fintech App</h1>
      <p className="text-slate-600 mb-6 max-w-md">
        Добро пожаловать в проект WMS Fintech.
      </p>
      <Link
        to="/profile-abduqodir"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
      >
        <span>Открыть Profile Abduqodir (Spacecraft)</span>
        <span>🚀</span>
      </Link>
    </div>
  );
}

export default Home;

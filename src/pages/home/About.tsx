import { Link } from "react-router";

function About() {
  return (
    <div className="space-y-16 py-12">
      {/* Hero section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          Fintech Hub Innovation
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Biz innovatsiyalar yaratamiz. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
            Kelajakni birgalikda quramiz.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
          WMS Fintech loyihasi texnologiya, qulaylik va yuqori sifatni birlashtirgan elektron savdo platformasidir.
          Biz mijozlarimizga eng so'nggi gadjetlarni ishonchli va tezkor yetkazib berishni maqsad qilganmiz.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-black mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Innovatsion Texnologiyalar
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Biz eng zamonaviy IT-yechimlarni joriy qilamiz va har doim yangi imkoniyatlarni o'rganamiz.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-black mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Ishonchlilik va Kafolat
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Har bir mahsulot sifat tekshiruvidan o'tadi va 100% rasmiy kafolat bilan ta'minlanadi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl font-black mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Mijozlar Manfaati
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              24/7 xizmat ko'rsatish, shaffof narxlar va har bir xaridorda xavfsiz tajriba ta'minlanadi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-10 sm:p-14 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400">
                10,000+
              </span>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                Mamnun mijozlar
              </p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                500+
              </span>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                Original tovarlar
              </p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                99.8%
              </span>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                Ijobiy sharhlar
              </p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                24/7
              </span>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                Qo'llab-quvvatlash
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg transition"
            >
              Katalogga o'tish →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

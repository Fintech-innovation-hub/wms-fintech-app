import { useState } from "react";
import { products, type Product } from "./products";
import ProductCard from "./ProductCard";

function Home() {
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Laptops", "Phones", "Accessories", "Smartwatches", "Tablets"];

  const handleAddToBasket = (product: Product) => {
    try {
      const existingCart: Product[] = JSON.parse(
        localStorage.getItem("basket") || "[]"
      );
      const updatedCart = [...existingCart, product];
      localStorage.setItem("basket", JSON.stringify(updatedCart));

      // Dispatch event to inform Header to refresh count
      window.dispatchEvent(new Event("basket-updated"));

      setAddedIds((prev) => [...prev, product.id]);
      setTimeout(() => {
        setAddedIds((prev) => prev.filter((id) => id !== product.id));
      }, 1500);
    } catch (e) {
      console.error("Savatga qo'shishda xatolik:", e);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Glow circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Yangi avlod Fintech savdo maydoni • 2026
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Zamonaviy Texnologiyalar <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-200">
              Eng Qulay Narxlarda
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-indigo-100/90 leading-relaxed">
            Noutbuklar, flagman smartfonlar va premium aksessuarlar. Rasmiy kafolat va tez yetkazib berish xizmati bilan.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Mahsulot yoki kategoriya bo'yicha qidiring..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-indigo-200/60 focus:outline-hidden focus:ring-2 focus:ring-cyan-400 focus:bg-white/15 transition-all text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-semibold text-indigo-200 hover:text-white"
                >
                  Tozalash
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg">
              ⚡
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Tezkor yetkazish</h4>
              <p className="text-xs text-slate-500">2 soat ichida eshigingizda</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
              🛡️
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">100% Kafolat</h4>
              <p className="text-xs text-slate-500">1 yillik rasmiy servis</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-lg">
              💳
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Qulay to'lov</h4>
              <p className="text-xs text-slate-500">Kartadan yoki naqd</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg">
              🎧
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">24/7 Yordam</h4>
              <p className="text-xs text-slate-500">Doimiy qo'llab-quvvatlash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header and filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mahsulotlar Katalogi
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Topilgan mahsulotlar soni:{" "}
              <span className="font-semibold text-indigo-600">
                {filteredProducts.length} ta
              </span>
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  {cat === "All" ? "Barchasi" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addedIds={addedIds}
                onAddToBasket={handleAddToBasket}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 max-w-md mx-auto shadow-xs">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Mahsulot topilmadi
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Qidiruv so'rovingizga mos tovar mavjud emas. Boshqa so'z bilan urinib ko'ring yoki tozalang.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition shadow-xs"
            >
              Barcha mahsulotlarni ko'rsatish
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;

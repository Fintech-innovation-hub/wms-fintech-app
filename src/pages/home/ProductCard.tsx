import type { Product } from "./products";

interface ProductCardProps {
  product: Product;
  addedIds: number[];
  onAddToBasket: (product: Product) => void;
}

function ProductCard({ product, addedIds, onAddToBasket }: ProductCardProps) {
  const isAdded = addedIds.includes(product.id);

  // Category badge colors
  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "laptops":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "phones":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "smartwatches":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "tablets":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
    }
  };

  return (
    <div className="group bg-white rounded-3xl p-3 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Category Pill */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full border shadow-xs backdrop-blur-xs ${getCategoryBadgeClass(
            product.category
          )}`}
        >
          {product.category}
        </span>

        {/* Wishlist / Like button placeholder */}
        <button
          type="button"
          aria-label="Sevimlilarga qo'shish"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white transition-all shadow-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-3 pt-4 flex flex-col flex-1">
        {/* Rating preview */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-amber-400 text-xs">
            {"★".repeat(5)}
          </div>
          <span className="text-xs font-semibold text-slate-500">
            4.9 (42)
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-4 line-clamp-1">
          Rasmiy kafolat bilan, original mahsulot
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-slate-600 block">Narxi:</span>
            <span className="text-xl font-extrabold text-slate-900">
              ${product.price.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToBasket(product)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-xs inline-flex items-center gap-1.5 transition-all duration-200 transform active:scale-95 shadow-xs ${
              isAdded
                ? "bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-400/50"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:shadow-indigo-600/40"
            }`}
          >
            {isAdded ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Qo'shildi</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Savatga</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

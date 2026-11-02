import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Product } from "../home/products";

interface CartItem extends Product {
  quantity: number;
}

function getInitialCart(): CartItem[] {
  try {
    const stored = localStorage.getItem("basket");
    if (stored) {
      const rawItems: unknown = JSON.parse(stored);
      if (Array.isArray(rawItems)) {
        const groupedMap = new Map<number, CartItem>();
        (rawItems as Product[]).forEach((product) => {
          if (groupedMap.has(product.id)) {
            const current = groupedMap.get(product.id)!;
            current.quantity += 1;
          } else {
            groupedMap.set(product.id, { ...product, quantity: 1 });
          }
        });
        return Array.from(groupedMap.values());
      }
    }
    return [];
  } catch {
    return [];
  }
}

function Basket() {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);
  const [promoCode, setPromoCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>("");
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleUpdate = () => {
      setItems(getInitialCart());
    };
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const syncToLocalStorage = (newItems: CartItem[]) => {
    // Un-group items back to array of products
    const flattened: Product[] = [];
    newItems.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        flattened.push({
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category,
          image: item.image,
        });
      }
    });

    localStorage.setItem("basket", JSON.stringify(flattened));
    setItems(newItems);
    window.dispatchEvent(new Event("basket-updated"));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    const updated = items
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter((item): item is CartItem => item !== null);

    syncToLocalStorage(updated);
  };

  const handleRemoveItem = (id: number) => {
    const updated = items.filter((item) => item.id !== id);
    syncToLocalStorage(updated);
  };

  const handleClearCart = () => {
    localStorage.removeItem("basket");
    setItems([]);
    window.dispatchEvent(new Event("basket-updated"));
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "FINTECH10") {
      setAppliedDiscount(0.1); // 10% off
      setPromoMessage("10% chegirma muvaffaqiyatli qo'llandi! 🎉");
    } else if (promoCode.trim().toUpperCase() === "WMS20") {
      setAppliedDiscount(0.2); // 20% off
      setPromoMessage("20% maxsus chegirma qo'llandi! 🚀");
    } else {
      setPromoMessage("Kupon kodi noto'g'ri (FINTECH10 kodini sinab ko'ring)");
      setAppliedDiscount(0);
    }
  };

  const handleCheckout = () => {
    setOrderSuccess(true);
    handleClearCart();
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * appliedDiscount;
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = Math.max(0, subtotal - discountAmount + shipping);

  if (orderSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl shadow-inner">
            ✓
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Buyurtmangiz qabul qilindi!
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Rahmat! Sizning buyurtmangiz muvaffaqiyatli rasmiylashtirildi. Tez orada operatorimiz siz bilan bog'lanadi.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              onClick={() => setOrderSuccess(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition shadow-md shadow-indigo-600/25"
            >
              Asosiy sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Xarid savatchasi
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Savatingizdagi tovarlarni ko'ring va buyurtma bering
          </p>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            onClick={handleClearCart}
            className="cursor-pointer text-xs font-semibold text-rose-600 hover:text-rose-700 px-3 py-2 rounded-lg hover:bg-rose-50 transition"
          >
            Savatni tozalash
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-slate-200/80 shadow-xs max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-4xl shadow-inner">
            🛒
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Savatingiz hozircha bo'sh
          </h3>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">
            Katalogimizdan o'zingizga yoqqan mahsulotlarni tanlab, savatga qo'shing.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/35 transition"
          >
            Xarid qilishni boshlash
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items list */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-4 transition-all hover:border-indigo-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl bg-slate-100 shrink-0"
                />

                <div className="flex-1 text-center sm:text-left min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="cursor-pointer px-3 py-1.5 text-slate-600 hover:bg-slate-200 text-sm font-bold transition"
                      aria-label="Kamaytirish"
                    >
                      -
                    </button>
                    <span className="px-3 py-1.5 text-xs font-bold text-slate-800 min-w-8 text-center bg-white">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="cursor-pointer px-3 py-1.5 text-slate-600 hover:bg-slate-200 text-sm font-bold transition"
                      aria-label="Ko'paytirish"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-sm font-bold text-slate-900 min-w-20 text-right">
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    className="cursor-pointer p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                    title="O'chirish"
                  >
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                Buyurtma xulosasi
              </h3>

              {/* Promo code */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Promokod mavjudmi?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Masalan: FINTECH10"
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="cursor-pointer px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition"
                  >
                    Qo'llash
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-xs mt-2 ${
                      appliedDiscount > 0 ? "text-emerald-600" : "text-rose-500"
                    }`}
                  >
                    {promoMessage}
                  </p>
                )}
              </div>

              {/* Cost breakdown */}
              <div className="space-y-3 text-sm border-t border-slate-100 pt-4">
                <div className="flex justify-between text-slate-600">
                  <span>Mahsulotlar summasi</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Chegirma ({(appliedDiscount * 100).toFixed(0)}%)</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600">
                  <span>Yetkazib berish</span>
                  <span className="text-emerald-600 font-semibold">Bepul</span>
                </div>

                <div className="border-t border-slate-100 pt-3 flex justify-between items-baseline">
                  <span className="text-base font-bold text-slate-900">
                    Jami to'lov:
                  </span>
                  <span className="text-2xl font-black text-indigo-600">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="cursor-pointer w-full py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Buyurtmani rasmiylashtirish
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <span>🔒 256-bit xavfsiz to'lov va rasmiy kafolat</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;

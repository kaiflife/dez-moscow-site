"use client";

import { useState } from "react";
import { physicalPrices, corporatePrices } from "@/data/prices";

export default function PriceTable() {
  const [tab, setTab] = useState<"fiz" | "yur">("fiz");

  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
        Честная стоимость услуг
      </h2>
      <p className="text-center text-slate-500 mb-8">
        Фиксируем цену в договоре до начала работ. Никаких скрытых доплат.
      </p>

      {/* Переключатель табов */}
      <div className="flex bg-slate-200 p-1.5 rounded-xl max-w-sm mx-auto mb-8">
        <button
          onClick={() => setTab("fiz")}
          className={`flex-1 py-2.5 font-medium rounded-lg text-sm transition ${tab === "fiz" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
        >
          Частным лицам (Квартиры)
        </button>
        <button
          onClick={() => setTab("yur")}
          className={`flex-1 py-2.5 font-medium rounded-lg text-sm transition ${tab === "yur" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
        >
          Юридическим лицам
        </button>
      </div>

      {/* Таблица цен */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {(tab === "fiz" ? physicalPrices : corporatePrices).map(
            (item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 hover:bg-slate-50 transition"
              >
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="font-bold text-blue-600 whitespace-nowrap bg-blue-50 px-3 py-1 rounded-md">
                  {item.price}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";

export default function BottomForm() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStaticSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    // Имитация отправки заявки
    setSubmitted(true);
    setPhone("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          Остались вопросы или хотите заказать выезд?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Введите ваш номер телефона. Менеджер проконсультирует вас, подберет
          метод обработки (холодный или горячий туман) и рассчитает стоимость.
        </p>

        {submitted ? (
          <div className="bg-green-600/10 border border-green-500/20 rounded-2xl p-6 max-w-md mx-auto">
            <span className="text-green-400 font-bold block mb-1">
              Спасибо! Заявка успешно отправлена.
            </span>
            <span className="text-sm text-slate-400">
              Свяжемся с вами в течение 15 минут.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleStaticSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="tel"
              required
              placeholder="Ваш номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition text-base"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition whitespace-nowrap shadow-lg shadow-blue-600/20"
            >
              Оставить заявку
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

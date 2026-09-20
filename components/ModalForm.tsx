"use client";

import { useState, FormEvent } from "react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setStatus("loading");

    // Имитация отправки данных на API Next.js маршрут
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setPhone("");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Задний темный фон */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Контент окна */}
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative z-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">Заявка принята!</h3>
            <p className="text-sm text-slate-500">
              Мастер перезвонит вам в течение 15 минут.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-2 tracking-tight text-slate-500">
              Вызвать мастера дезинсекции
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Оставьте номер телефона, мы свяжемся с вами для уточнения деталей
              и расчета точной стоимости.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Ваш телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-900 bg-slate-50 transition"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20"
              >
                {status === "loading" ? "Отправка..." : "Перезвоните мне"}
              </button>
              <p className="text-[11px] text-slate-400 text-center leading-normal">
                Нажимая кнопку, вы соглашаетесь на обработку персональных
                данных. Ваши данные конфиденциальны.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

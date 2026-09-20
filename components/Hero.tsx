interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const highlights = [
    { t: "40 минут", d: "Длится обработка" },
    { t: "100% анонимно", d: "Соседи не узнают" },
    { t: "0 рублей", d: "Выезд при заказе" },
    { t: "Договор", d: "И гарантия 3 года" },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="bg-blue-500/20 text-blue-300 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4 border border-blue-500/30">
          Одобрено Роспотребнадзором
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
          Профессиональное уничтожение{" "}
          <span className="text-blue-400">клопов и тараканов</span> в Москве
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Выезд мастера за 1 час. Безопасные сертифицированные препараты без
          запаха для людей и домашних животных. Гарантия по договору до 3 лет.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm"
            >
              <div className="font-bold text-xl text-blue-400">{item.t}</div>
              <div className="text-xs text-slate-400">{item.d}</div>
            </div>
          ))}
        </div>
        {/* Кнопка теперь открывает модалку */}
        <button
          onClick={onOpenModal}
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5"
        >
          Вызвать мастера дезинсекции
        </button>
      </div>
    </section>
  );
}

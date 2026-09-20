export default function Preparation() {
  const steps = [
    {
      title: "Продукты и посуда",
      desc: "Уберите все продукты питания, средства гигиены и кухонную посуду в герметичные полиэтиленовые пакеты.",
    },
    {
      title: "Домашние животные",
      desc: "Обеспечьте отсутствие теплокровных питомцев в помещении на время дезинсекции и последующего проветривания (на 1-2 часа).",
    },
    {
      title: "Доступ к стенам",
      desc: "По возможности отодвиньте крупногабаритную мебель от стен на 10–30 см, чтобы мастер тщательно обработал плинтуса.",
    },
  ];

  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-500">
          Как подготовить помещение к обработке
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-slate-200"
            >
              <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2 text-slate-500">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

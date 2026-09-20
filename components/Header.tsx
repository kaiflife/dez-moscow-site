export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            Д
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block text-slate-500">
              ГОСТ-ДЕЗИНФЕКЦИЯ
            </span>
            <span className="text-xs text-slate-500">
              Москва и Московская область
            </span>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <a
            href="tel:+74994906982"
            className="text-xl font-extrabold text-blue-600 hover:text-blue-700 block transition"
          >
            +7 (499) 490-69-82
          </a>
          <span className="text-xs text-green-600 flex items-center justify-center sm:justify-end gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Работаем круглосуточно 24/7
          </span>
        </div>
      </div>
    </header>
  );
}

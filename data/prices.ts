export interface PriceItem {
  name: string;
  price: string;
}

export const physicalPrices: PriceItem[] = [
  { name: "Обработка комнаты", price: "от 800 руб" },
  { name: "1-комнатная квартира", price: "от 1000 руб" },
  { name: "2-комнатная квартира", price: "от 1200 руб" },
  { name: "3-комнатная квартира", price: "от 1500 руб" },
  { name: "4-комнатная квартира", price: "от 2400 руб" },
  { name: "Бытовка / Вагончик", price: "от 500 руб" },
  { name: "Установка барьера (защита)", price: "500 руб" },
];

export const corporatePrices: PriceItem[] = [
  { name: "Помещения до 50 м²", price: "1800 руб" },
  { name: "Помещения до 100 м²", price: "2800 руб" },
  { name: "Помещения до 300 м²", price: "25 руб/м²" },
  { name: "Помещения до 500 м²", price: "20 руб/м²" },
  { name: "Помещения свыше 1000 м²", price: "15 руб/м²" },
];

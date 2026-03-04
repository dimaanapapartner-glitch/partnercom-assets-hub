export interface CaseStudy {
  id: string;
  title: { ru: string; en: string };
  category: { ru: string; en: string };
  result: { ru: string; en: string };
  description: { ru: string; en: string };
  stats: { label: { ru: string; en: string }; value: string }[];
}

export const cases: CaseStudy[] = [
  {
    id: "1",
    title: { ru: "Продажа гостиничного комплекса в Анапе", en: "Sale of Hotel Complex in Anapa" },
    category: { ru: "Гостиничный бизнес", en: "Hospitality" },
    result: { ru: "Сделка закрыта за 2 месяца", en: "Deal closed in 2 months" },
    description: {
      ru: "Покупатель обратился с запросом на приобретение гостиничного комплекса. Мы нашли подходящий объект в Анапе и успешно провели сделку по продаже комплекса стоимостью 160 млн рублей за 2 месяца.",
      en: "A buyer approached us looking for a hotel complex. We found a suitable property in Anapa and successfully completed the sale of the complex worth ₽160M in 2 months.",
    },
    stats: [
      { label: { ru: "Сумма сделки", en: "Deal Value" }, value: "₽ 160 млн" },
      { label: { ru: "Срок", en: "Timeline" }, value: "2 мес." },
    ],
  },
  {
    id: "2",
    title: { ru: "Продажа особняка на набережной Москвы-реки", en: "Sale of Mansion on Moscow River Embankment" },
    category: { ru: "Особняки", en: "Mansions" },
    result: { ru: "Реализован за 5 месяцев", en: "Sold in 5 months" },
    description: {
      ru: "Реализован особняк в центре Москвы на набережной Москвы-реки площадью 1 700 м² стоимостью 540 млн рублей. Срок реализации — 5 месяцев.",
      en: "A 1,700 sqm mansion in central Moscow on the Moscow River embankment was sold for ₽540M. Timeline — 5 months.",
    },
    stats: [
      { label: { ru: "Сумма сделки", en: "Deal Value" }, value: "₽ 540 млн" },
      { label: { ru: "Площадь", en: "Area" }, value: "1 700 м²" },
      { label: { ru: "Срок", en: "Timeline" }, value: "5 мес." },
    ],
  },
];

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
    title: { ru: "Продажа гостиничного комплекса в Сочи", en: "Sale of Hotel Complex in Sochi" },
    category: { ru: "Гостиничный бизнес", en: "Hospitality" },
    result: { ru: "Сделка закрыта за 4 месяца", en: "Deal closed in 4 months" },
    description: {
      ru: "Клиент обратился с задачей продать гостиничный комплекс на 300 номеров. Мы провели оценку, подготовили инвестиционный меморандум и нашли покупателя из числа институциональных инвесторов.",
      en: "Client needed to sell a 300-room hotel complex. We conducted valuation, prepared an investment memorandum, and found an institutional investor buyer.",
    },
    stats: [
      { label: { ru: "Сумма сделки", en: "Deal Value" }, value: "₽ 2.3 млрд" },
      { label: { ru: "Срок", en: "Timeline" }, value: "4 мес." },
      { label: { ru: "Премия к оценке", en: "Premium" }, value: "+12%" },
    ],
  },
  {
    id: "2",
    title: { ru: "Привлечение инвестиций в производство", en: "Investment Attraction for Manufacturing" },
    category: { ru: "Производство", en: "Manufacturing" },
    result: { ru: "Привлечено ₽ 1.5 млрд", en: "₽ 1.5B raised" },
    description: {
      ru: "Производственная компания нуждалась в инвестициях для модернизации. Мы структурировали сделку и привлекли стратегического инвестора с опытом в отрасли.",
      en: "A manufacturing company needed investment for modernization. We structured the deal and attracted a strategic investor with industry experience.",
    },
    stats: [
      { label: { ru: "Инвестиции", en: "Investment" }, value: "₽ 1.5 млрд" },
      { label: { ru: "Срок", en: "Timeline" }, value: "6 мес." },
      { label: { ru: "Доля инвестора", en: "Investor Share" }, value: "35%" },
    ],
  },
  {
    id: "3",
    title: { ru: "Реструктуризация розничной сети", en: "Retail Chain Restructuring" },
    category: { ru: "Ритейл", en: "Retail" },
    result: { ru: "Рост EBITDA на 40%", en: "EBITDA growth of 40%" },
    description: {
      ru: "Региональная розничная сеть из 28 магазинов столкнулась с падением рентабельности. Мы нашли стратегического покупателя, который интегрировал сеть в свой бизнес.",
      en: "A regional retail chain of 28 stores faced declining profitability. We found a strategic buyer who integrated the chain into their business.",
    },
    stats: [
      { label: { ru: "Сумма сделки", en: "Deal Value" }, value: "₽ 890 млн" },
      { label: { ru: "Срок", en: "Timeline" }, value: "5 мес." },
      { label: { ru: "Магазины", en: "Stores" }, value: "28" },
    ],
  },
  {
    id: "4",
    title: { ru: "Продажа земельного банка", en: "Land Bank Sale" },
    category: { ru: "Сельское хозяйство", en: "Agriculture" },
    result: { ru: "Сделка на ₽ 720 млн", en: "₽ 720M deal" },
    description: {
      ru: "Продажа сельскохозяйственных земель общей площадью 15 000 га. Комплексная подготовка документации и структурирование через SPV.",
      en: "Sale of agricultural land totaling 15,000 hectares. Comprehensive documentation and SPV structuring.",
    },
    stats: [
      { label: { ru: "Площадь", en: "Area" }, value: "15 000 га" },
      { label: { ru: "Сумма", en: "Value" }, value: "₽ 720 млн" },
      { label: { ru: "Срок", en: "Timeline" }, value: "8 мес." },
    ],
  },
];

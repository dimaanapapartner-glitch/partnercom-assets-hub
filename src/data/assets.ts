export interface Asset {
  id: string;
  title: { ru: string; en: string };
  type: { ru: string; en: string };
  region: { ru: string; en: string };
  price: string;
  priceValue: number;
  status: "sale" | "negotiation" | "closed";
  description: { ru: string; en: string };
  metrics: { label: { ru: string; en: string }; value: string }[];
  featured?: boolean;
}

export const assetTypeOptions = [
  { ru: "Все", en: "All" },
  { ru: "Производство", en: "Manufacturing" },
  { ru: "Коммерческая недвижимость", en: "Commercial Real Estate" },
  { ru: "Гостиничный бизнес", en: "Hospitality" },
  { ru: "Сельское хозяйство", en: "Agriculture" },
  { ru: "Логистика", en: "Logistics" },
  { ru: "Ритейл", en: "Retail" },
];

export const regionOptions = [
  { ru: "Все", en: "All" },
  { ru: "Москва и МО", en: "Moscow Region" },
  { ru: "Санкт-Петербург", en: "Saint Petersburg" },
  { ru: "Краснодарский край", en: "Krasnodar Krai" },
  { ru: "Татарстан", en: "Tatarstan" },
  { ru: "Новосибирская обл.", en: "Novosibirsk Oblast" },
  { ru: "Свердловская обл.", en: "Sverdlovsk Oblast" },
];

export const assets: Asset[] = [
  {
    id: "1",
    title: { ru: "Завод металлоконструкций", en: "Steel Construction Plant" },
    type: { ru: "Производство", en: "Manufacturing" },
    region: { ru: "Свердловская обл.", en: "Sverdlovsk Oblast" },
    price: "₽ 850 млн",
    priceValue: 850,
    status: "sale",
    description: {
      ru: "Действующий завод по производству металлоконструкций. Площадь 12 000 м², загрузка мощностей — 92%.",
      en: "Operating steel construction plant. Area 12,000 m², 92% capacity utilization.",
    },
    metrics: [
      { label: { ru: "Площадь", en: "Area" }, value: "12 000 м²" },
      { label: { ru: "Выручка", en: "Revenue" }, value: "₽ 1.2 млрд" },
      { label: { ru: "EBITDA", en: "EBITDA" }, value: "₽ 180 млн" },
      { label: { ru: "Персонал", en: "Staff" }, value: "340" },
    ],
    featured: true,
  },
  {
    id: "2",
    title: { ru: "Бизнес-центр «Горизонт»", en: "Horizon Business Center" },
    type: { ru: "Коммерческая недвижимость", en: "Commercial Real Estate" },
    region: { ru: "Москва и МО", en: "Moscow Region" },
    price: "₽ 2.1 млрд",
    priceValue: 2100,
    status: "sale",
    description: {
      ru: "Класс А, 18 этажей, заполняемость 96%. Якорные арендаторы — международные компании.",
      en: "Class A, 18 floors, 96% occupancy. Anchor tenants — international companies.",
    },
    metrics: [
      { label: { ru: "Площадь", en: "Area" }, value: "32 000 м²" },
      { label: { ru: "Заполняемость", en: "Occupancy" }, value: "96%" },
      { label: { ru: "NOI", en: "NOI" }, value: "₽ 380 млн" },
      { label: { ru: "Cap Rate", en: "Cap Rate" }, value: "9.2%" },
    ],
    featured: true,
  },
  {
    id: "3",
    title: { ru: "Курортный комплекс", en: "Resort Complex" },
    type: { ru: "Гостиничный бизнес", en: "Hospitality" },
    region: { ru: "Краснодарский край", en: "Krasnodar Krai" },
    price: "₽ 1.4 млрд",
    priceValue: 1400,
    status: "negotiation",
    description: {
      ru: "4-звёздочный курортный комплекс на черноморском побережье. 220 номеров, SPA, ресторан.",
      en: "4-star resort complex on the Black Sea coast. 220 rooms, SPA, restaurant.",
    },
    metrics: [
      { label: { ru: "Номера", en: "Rooms" }, value: "220" },
      { label: { ru: "Выручка", en: "Revenue" }, value: "₽ 640 млн" },
      { label: { ru: "Загрузка", en: "Occupancy" }, value: "78%" },
      { label: { ru: "Персонал", en: "Staff" }, value: "180" },
    ],
    featured: true,
  },
  {
    id: "4",
    title: { ru: "Агрокомплекс «Нива»", en: "Niva Agricultural Complex" },
    type: { ru: "Сельское хозяйство", en: "Agriculture" },
    region: { ru: "Краснодарский край", en: "Krasnodar Krai" },
    price: "₽ 520 млн",
    priceValue: 520,
    status: "sale",
    description: {
      ru: "Земельный банк 8 500 га, элеватор, парк техники. Урожайность выше среднерегиональной на 18%.",
      en: "8,500 ha land bank, elevator, machinery fleet. Yield 18% above regional average.",
    },
    metrics: [
      { label: { ru: "Земля", en: "Land" }, value: "8 500 га" },
      { label: { ru: "Выручка", en: "Revenue" }, value: "₽ 310 млн" },
      { label: { ru: "EBITDA", en: "EBITDA" }, value: "₽ 95 млн" },
      { label: { ru: "Техника", en: "Machinery" }, value: "45 ед." },
    ],
  },
  {
    id: "5",
    title: { ru: "Логистический парк «Транзит»", en: "Transit Logistics Park" },
    type: { ru: "Логистика", en: "Logistics" },
    region: { ru: "Татарстан", en: "Tatarstan" },
    price: "₽ 1.8 млрд",
    priceValue: 1800,
    status: "closed",
    description: {
      ru: "Класс А, 85 000 м² складских помещений. Стратегическое расположение на пересечении федеральных трасс.",
      en: "Class A, 85,000 m² warehouse space. Strategic location at federal highway intersection.",
    },
    metrics: [
      { label: { ru: "Площадь", en: "Area" }, value: "85 000 м²" },
      { label: { ru: "Заполняемость", en: "Occupancy" }, value: "94%" },
      { label: { ru: "NOI", en: "NOI" }, value: "₽ 290 млн" },
      { label: { ru: "Арендаторы", en: "Tenants" }, value: "12" },
    ],
  },
  {
    id: "6",
    title: { ru: "Сеть супермаркетов «Свежесть»", en: "Svezhest Supermarket Chain" },
    type: { ru: "Ритейл", en: "Retail" },
    region: { ru: "Новосибирская обл.", en: "Novosibirsk Oblast" },
    price: "₽ 680 млн",
    priceValue: 680,
    status: "negotiation",
    description: {
      ru: "14 магазинов в Новосибирске и области. Собственная логистика и распределительный центр.",
      en: "14 stores in Novosibirsk and region. Own logistics and distribution center.",
    },
    metrics: [
      { label: { ru: "Магазины", en: "Stores" }, value: "14" },
      { label: { ru: "Выручка", en: "Revenue" }, value: "₽ 2.1 млрд" },
      { label: { ru: "EBITDA", en: "EBITDA" }, value: "₽ 120 млн" },
      { label: { ru: "Персонал", en: "Staff" }, value: "560" },
    ],
  },
];

import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Building2, MapPin, BarChart3 } from "lucide-react";

const articles = [
  { icon: TrendingUp, title: { ru: "Рынок M&A в России: итоги 2025", en: "Russian M&A Market: 2025 Results" }, desc: { ru: "Объём рынка слияний и поглощений достиг рекордных значений. Анализ ключевых трендов и прогноз на 2026 год.", en: "M&A market volume reached record highs. Analysis of key trends and forecast for 2026." }, date: "15.01.2026" },
  { icon: Building2, title: { ru: "Коммерческая недвижимость: куда инвестировать", en: "Commercial Real Estate: Where to Invest" }, desc: { ru: "Обзор наиболее перспективных сегментов коммерческой недвижимости для инвестиций в текущем году.", en: "Overview of the most promising commercial real estate segments for investments this year." }, date: "28.12.2025" },
  { icon: MapPin, title: { ru: "Региональные активы: скрытый потенциал", en: "Regional Assets: Hidden Potential" }, desc: { ru: "Почему региональные предприятия торгуются с дисконтом 30–40% и как это использовать.", en: "Why regional enterprises trade at a 30-40% discount and how to capitalize on it." }, date: "10.12.2025" },
  { icon: BarChart3, title: { ru: "Due Diligence: чек-лист для покупателя", en: "Due Diligence: Buyer's Checklist" }, desc: { ru: "Полный чек-лист проверки актива перед покупкой — от финансов до экологии.", en: "Complete asset verification checklist before purchase — from finances to ecology." }, date: "25.11.2025" },
];

const AnalyticsPage = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Аналитика" : "Analytics"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Исследования и обзоры" : "Research & Reviews"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-card rounded-lg border border-border p-6 hover:border-accent/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg navy-gradient flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{a.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnalyticsPage;

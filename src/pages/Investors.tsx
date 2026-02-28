import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { TrendingUp, Shield, Search, BarChart3 } from "lucide-react";

const benefits = [
  { icon: Search, title: { ru: "Доступ к эксклюзивным объектам", en: "Exclusive Object Access" }, desc: { ru: "Получите доступ к активам, которые не представлены на открытом рынке", en: "Access assets not available on the open market" } },
  { icon: BarChart3, title: { ru: "Глубокая аналитика", en: "Deep Analytics" }, desc: { ru: "Детальные инвестиционные меморандумы с финансовыми моделями", en: "Detailed investment memorandums with financial models" } },
  { icon: Shield, title: { ru: "Due Diligence", en: "Due Diligence" }, desc: { ru: "Комплексная проверка всех аспектов актива до сделки", en: "Comprehensive verification of all asset aspects before the deal" } },
  { icon: TrendingUp, title: { ru: "Оптимизация условий", en: "Terms Optimization" }, desc: { ru: "Структурирование сделок для максимальной доходности", en: "Deal structuring for maximum returns" } },
];

const Investors = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Инвесторам" : "For Investors"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mb-6">
            {lang === "ru"
              ? "Находим активы с высоким потенциалом доходности"
              : "Finding Assets with High Return Potential"}
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-2xl">
            {lang === "ru"
              ? "Мы отбираем инвестиционные возможности, проводим полный due diligence и сопровождаем сделку на всех этапах."
              : "We select investment opportunities, conduct full due diligence and support the deal at every stage."}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            {lang === "ru" ? "Почему инвесторы выбирают нас" : "Why Investors Choose Us"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 shrink-0 rounded-lg navy-gradient flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{b.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc[lang]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm className="bg-card" />
    </Layout>
  );
};

export default Investors;

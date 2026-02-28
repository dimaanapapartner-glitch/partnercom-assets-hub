import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { Lock, TrendingUp, Users, Clock } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: { ru: "Максимальная цена", en: "Maximum Price" }, desc: { ru: "Профессиональная оценка и создание конкурентной среды между покупателями", en: "Professional valuation and creating competitive environment among buyers" } },
  { icon: Lock, title: { ru: "Конфиденциальность", en: "Confidentiality" }, desc: { ru: "Информация о продаже не попадёт на открытый рынок без вашего согласия", en: "Sale information won't reach the open market without your consent" } },
  { icon: Users, title: { ru: "База покупателей", en: "Buyer Database" }, desc: { ru: "Более 2 000 верифицированных покупателей и инвесторов в нашей базе", en: "Over 2,000 verified buyers and investors in our database" } },
  { icon: Clock, title: { ru: "Скорость", en: "Speed" }, desc: { ru: "Средний срок закрытия сделки — 4–6 месяцев", en: "Average deal closing time — 4-6 months" } },
];

const Sellers = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Продавцам" : "For Sellers"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mb-6">
            {lang === "ru"
              ? "Продайте актив по максимальной цене"
              : "Sell Your Asset at Maximum Price"}
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-2xl">
            {lang === "ru"
              ? "Мы берём на себя весь процесс: от оценки до закрытия сделки. Вы получаете лучшую цену при полной конфиденциальности."
              : "We handle the entire process: from valuation to deal closing. You get the best price with full confidentiality."}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
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

export default Sellers;

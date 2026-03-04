import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Eye, Target, Users } from "lucide-react";

const values = [
  { icon: Shield, title: { ru: "Надёжность", en: "Reliability" }, desc: { ru: "Каждая сделка сопровождается комплексной юридической проверкой", en: "Every deal is accompanied by comprehensive legal due diligence" } },
  { icon: Eye, title: { ru: "Конфиденциальность", en: "Confidentiality" }, desc: { ru: "Строгое соблюдение NDA на всех этапах переговоров", en: "Strict NDA compliance at all negotiation stages" } },
  { icon: Target, title: { ru: "Результат", en: "Results" }, desc: { ru: "Ориентация на максимальную стоимость и оптимальные условия", en: "Focus on maximum value and optimal conditions" } },
  { icon: Users, title: { ru: "Партнёрство", en: "Partnership" }, desc: { ru: "Долгосрочные отношения с клиентами и участниками рынка", en: "Long-term relationships with clients and market participants" } },
];

const About = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "О компании" : "About Us"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mb-6">
            {lang === "ru"
              ? "Партнер.КОМ — ваш проводник в мире крупных активов"
              : "Partner.COM — Your Guide in the World of Major Assets"}
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-2xl">
            {lang === "ru"
              ? "С 2010 года мы помогаем предпринимателям, инвесторам и собственникам совершать сделки с активами стоимостью от ₽100 млн."
              : "Since 2010, we've been helping entrepreneurs, investors and owners execute asset transactions worth ₽100M and above."}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {lang === "ru" ? "Наша миссия" : "Our Mission"}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {lang === "ru"
                    ? "Мы создаём условия, при которых владельцы крупных активов находят идеальных покупателей и инвесторов, а инвесторы получают доступ к качественным объектам с прозрачной историей."
                    : "We create conditions where major asset owners find ideal buyers and investors, while investors gain access to quality objects with transparent history."}
                </p>
                <p>
                  {lang === "ru"
                    ? "Наша команда состоит из профессионалов с опытом в инвестиционном банкинге, консалтинге и юриспруденции. Мы понимаем специфику каждой отрасли и региона."
                    : "Our team consists of professionals with experience in investment banking, consulting and law. We understand the specifics of each industry and region."}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10 000+", label: { ru: "закрытых сделок", en: "closed deals" } },
                { value: "80", label: { ru: "регионов России", en: "regions of Russia" } },
                { value: "15 лет", label: { ru: "на рынке", en: "in market" } },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 text-center">
                  <div className="text-2xl font-bold text-gold-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            {lang === "ru" ? "Наши ценности" : "Our Values"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-background rounded-lg p-6 border border-border text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg navy-gradient flex items-center justify-center text-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

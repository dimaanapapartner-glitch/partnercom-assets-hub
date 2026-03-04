import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "10 000+", label: { ru: "Закрытых сделок", en: "Closed Deals" } },
  { value: "15", label: { ru: "Лет на рынке", en: "Years in Market" } },
  { value: "80", label: { ru: "Регионов России", en: "Regions of Russia" } },
];

export const TrustNumbers = () => {
  const { lang } = useLanguage();

  return (
    <section className="section-padding border-b border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

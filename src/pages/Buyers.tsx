import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { Search, FileCheck, Scale, Headphones } from "lucide-react";

const benefits = [
  { icon: Search, title: { ru: "Подбор по критериям", en: "Criteria-Based Search" }, desc: { ru: "Находим объекты, точно соответствующие вашим инвестиционным критериям", en: "We find objects exactly matching your investment criteria" } },
  { icon: FileCheck, title: { ru: "Проверенные активы", en: "Verified Assets" }, desc: { ru: "Все активы проходят предварительную проверку перед представлением", en: "All assets undergo preliminary verification before presentation" } },
  { icon: Scale, title: { ru: "Справедливая цена", en: "Fair Price" }, desc: { ru: "Независимая оценка гарантирует объективную стоимость актива", en: "Independent valuation guarantees objective asset value" } },
  { icon: Headphones, title: { ru: "Полное сопровождение", en: "Full Support" }, desc: { ru: "Юридическое и финансовое сопровождение на всех этапах сделки", en: "Legal and financial support at all deal stages" } },
];

const Buyers = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Покупателям" : "For Buyers"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mb-6">
            {lang === "ru"
              ? "Найдите идеальный актив для вашего портфеля"
              : "Find the Perfect Asset for Your Portfolio"}
          </h1>
          <p className="text-lg text-primary-foreground/60 max-w-2xl">
            {lang === "ru"
              ? "Мы предоставляем доступ к широкому выбору проверенных активов с полной документацией и прозрачной историей."
              : "We provide access to a wide selection of verified assets with complete documentation and transparent history."}
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

export default Buyers;

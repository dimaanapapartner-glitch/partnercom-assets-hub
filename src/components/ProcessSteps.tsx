import { useLanguage } from "@/contexts/LanguageContext";
import { MessageSquare, Search, FileText, Megaphone, Handshake, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: { ru: "Консультация", en: "Consultation" }, desc: { ru: "Обсуждаем цели, определяем стратегию и формат сотрудничества", en: "Discuss goals, define strategy and cooperation format" } },
  { icon: Search, title: { ru: "Оценка", en: "Valuation" }, desc: { ru: "Проводим независимую оценку актива и анализ рынка", en: "Independent asset valuation and market analysis" } },
  { icon: FileText, title: { ru: "Подготовка", en: "Preparation" }, desc: { ru: "Готовим инвестиционный меморандум и пакет документов", en: "Prepare investment memorandum and document package" } },
  { icon: Megaphone, title: { ru: "Маркетинг", en: "Marketing" }, desc: { ru: "Конфиденциальный поиск покупателей и инвесторов", en: "Confidential search for buyers and investors" } },
  { icon: Handshake, title: { ru: "Переговоры", en: "Negotiation" }, desc: { ru: "Ведём переговоры, согласовываем условия сделки", en: "Negotiate and agree on deal terms" } },
  { icon: CheckCircle2, title: { ru: "Закрытие", en: "Closing" }, desc: { ru: "Сопровождаем сделку до подписания и перехода прав", en: "Support the deal through signing and rights transfer" } },
];

export const ProcessSteps = () => {
  const { lang } = useLanguage();

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            {lang === "ru" ? "Как мы работаем" : "Our Process"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {lang === "ru" ? "6 шагов к успешной сделке" : "6 Steps to a Successful Deal"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative bg-background rounded-lg p-6 border border-border hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg navy-gradient flex items-center justify-center text-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-accent/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{step.title[lang]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc[lang]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

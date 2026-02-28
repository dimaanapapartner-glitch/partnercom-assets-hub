import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { cases } from "@/data/cases";

const CasesPage = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Кейсы" : "Case Studies"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Успешные сделки" : "Successful Deals"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <div key={c.id} className="bg-card rounded-lg border border-border p-6 hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {c.category[lang]}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.result[lang]}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title[lang]}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.description[lang]}</p>
                <div className="flex gap-4">
                  {c.stats.map((s, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold text-gold-gradient">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label[lang]}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CasesPage;

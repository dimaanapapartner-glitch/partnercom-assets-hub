import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: { ru: "Телефон", en: "Phone" }, value: "+7 (___) ___-__-__" },
  { icon: Mail, label: { ru: "Email", en: "Email" }, value: "info@partner.com" },
  { icon: MapPin, label: { ru: "Адрес", en: "Address" }, value: { ru: "Москва, ул. ___________, д. __", en: "Moscow, _________ St., bld. __" } },
  { icon: Clock, label: { ru: "Режим работы", en: "Working Hours" }, value: { ru: "Пн–Пт: 9:00–19:00", en: "Mon–Fri: 9:00–19:00" } },
];

const Contacts = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Контакты" : "Contacts"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Свяжитесь с нами" : "Get in Touch"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              const val = typeof c.value === "string" ? c.value : c.value[lang];
              return (
                <div key={i} className="bg-card rounded-lg border border-border p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg navy-gradient flex items-center justify-center text-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{c.label[lang]}</div>
                  <div className="font-semibold">{val}</div>
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

export default Contacts;

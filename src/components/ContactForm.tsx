import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Phone, Send } from "lucide-react";

const contactLinks = [
  {
    href: "https://wa.me/79883302012",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    href: "https://t.me/dimaokey78",
    label: "Telegram",
    icon: Send,
  },
  // {
  //   href: "https://web.max.ru/58613602",
  //   label: "MAX",
  //   icon: MessageSquare,
  // },
];

export const ContactForm = ({ className = "" }: { className?: string }) => {
  const { lang } = useLanguage();

  return (
    <section className={`section-padding ${className}`}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            {lang === "ru" ? "Свяжитесь с нами" : "Get in Touch"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {lang === "ru" ? "Будем на связи" : "Contact Us"}
          </h2>
          <p className="text-muted-foreground mt-3">
            {lang === "ru"
              ? "Позвоните нам или напишите в удобном мессенджере"
              : "Call us or message us using your preferred messenger"}
          </p>

          <a
            href="tel:+79883302012"
            className="inline-flex items-center gap-3 mt-8 text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-7 h-7 text-accent" />
            +7 (988) 330-20-12
          </a>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-8">
            {contactLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-md border border-border bg-background font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/*
 * Временно скрытая форма заявки. Для возврата формы восстановите этот вариант
 * компонента и импорты useState, Button, Input, Textarea и useToast.
 *
export const ContactForm = ({ className = "" }: { className?: string }) => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: lang === "ru" ? "Заявка отправлена" : "Request Sent",
        description: lang === "ru" ? "Мы свяжемся с вами в ближайшее время" : "We'll contact you shortly",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className={`section-padding ${className}`}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              {lang === "ru" ? "Свяжитесь с нами" : "Get in Touch"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {lang === "ru" ? "Оставить заявку" : "Submit a Request"}
            </h2>
            <p className="text-muted-foreground mt-3">
              {lang === "ru"
                ? "Расскажите о вашем запросе — мы ответим в течение 24 часов"
                : "Tell us about your request — we'll respond within 24 hours"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder={lang === "ru" ? "Имя *" : "Name *"} required />
              <Input placeholder={lang === "ru" ? "Компания" : "Company"} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email *" required />
              <Input type="tel" placeholder={lang === "ru" ? "Телефон" : "Phone"} />
            </div>
            <Textarea
              placeholder={lang === "ru" ? "Опишите ваш запрос..." : "Describe your request..."}
              rows={4}
            />
            <div className="text-center pt-2">
              <Button variant="gold" size="lg" type="submit" disabled={loading}>
                {loading
                  ? (lang === "ru" ? "Отправка..." : "Sending...")
                  : (lang === "ru" ? "Отправить заявку" : "Submit Request")}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              {lang === "ru"
                ? "Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных"
                : "By clicking the button, you agree to the privacy policy"}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
*/

import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative navy-gradient text-primary-foreground overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-accent/10" />
        <div className="absolute top-1/2 -left-12 w-64 h-64 rounded-full border border-accent/5" />
        <div className="absolute bottom-10 right-1/3 w-48 h-48 rounded-full bg-accent/5" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Партнер.КОМ
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {lang === "ru"
              ? "Сделки с крупными активами — надёжно и конфиденциально"
              : "Major Asset Deals — Reliable & Confidential"}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {lang === "ru"
              ? "Профессиональный посредник в сделках с бизнесами, недвижимостью и инвестиционными активами от ₽300 млн"
              : "Professional intermediary in business, real estate and investment asset transactions from ₽300M"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/investors">
                {lang === "ru" ? "Инвестору" : "For Investors"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/buyers">{lang === "ru" ? "Покупателю" : "For Buyers"}</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/sellers">{lang === "ru" ? "Продавцу" : "For Sellers"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

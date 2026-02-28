import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", ru: "Главная", en: "Home" },
  { path: "/about", ru: "О компании", en: "About" },
  { path: "/investors", ru: "Инвесторам", en: "Investors" },
  { path: "/assets", ru: "Активы", en: "Assets" },
  { path: "/buyers", ru: "Покупателям", en: "Buyers" },
  { path: "/sellers", ru: "Продавцам", en: "Sellers" },
  { path: "/cases", ru: "Кейсы", en: "Cases" },
  { path: "/analytics", ru: "Аналитика", en: "Analytics" },
  { path: "/faq", ru: "FAQ", en: "FAQ" },
  { path: "/contacts", ru: "Контакты", en: "Contacts" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 navy-gradient border-b border-gold/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="text-primary-foreground font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="text-gold-gradient">Партнер</span>
            <span className="text-primary-foreground/80">.КОМ</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {item[lang]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "ru" ? "en" : "ru")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors border border-primary-foreground/20"
            >
              <Globe className="w-4 h-4" />
              {lang === "ru" ? "EN" : "RU"}
            </button>
            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden navy-gradient border-t border-gold/10 animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-accent bg-accent/10"
                      : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  }`}
                >
                  {item[lang]}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="navy-gradient text-primary-foreground/70 border-t border-gold/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">
                <span className="text-gold-gradient">Партнер</span>
                <span className="text-primary-foreground/80">.КОМ</span>
              </div>
              <p className="text-sm leading-relaxed">
                {lang === "ru"
                  ? "Профессиональный посредник в сделках с крупными активами"
                  : "Professional intermediary in major asset transactions"}
              </p>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                {lang === "ru" ? "Услуги" : "Services"}
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/investors" className="hover:text-accent transition-colors">{lang === "ru" ? "Инвесторам" : "Investors"}</Link>
                <Link to="/buyers" className="hover:text-accent transition-colors">{lang === "ru" ? "Покупателям" : "Buyers"}</Link>
                <Link to="/sellers" className="hover:text-accent transition-colors">{lang === "ru" ? "Продавцам" : "Sellers"}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                {lang === "ru" ? "Компания" : "Company"}
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/about" className="hover:text-accent transition-colors">{lang === "ru" ? "О нас" : "About"}</Link>
                <Link to="/cases" className="hover:text-accent transition-colors">{lang === "ru" ? "Кейсы" : "Cases"}</Link>
                <Link to="/privacy" className="hover:text-accent transition-colors">{lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                {lang === "ru" ? "Контакты" : "Contacts"}
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <span>+7 (___) ___-__-__</span>
                <span>info@partner.com</span>
                <span>{lang === "ru" ? "Москва, Россия" : "Moscow, Russia"}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Партнер.КОМ. {lang === "ru" ? "Все права защищены." : "All rights reserved."}
          </div>
        </div>
      </footer>
    </div>
  );
};

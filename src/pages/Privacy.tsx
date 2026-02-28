import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          {lang === "ru" ? (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Общие положения</h2>
                <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Партнер.КОМ (далее — «Компания»).</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Сбор информации</h2>
                <p>Компания собирает информацию, которую вы предоставляете при заполнении форм на сайте: имя, адрес электронной почты, номер телефона, название компании и содержание обращения.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Использование информации</h2>
                <p>Собранная информация используется исключительно для обработки ваших запросов, предоставления услуг и улучшения качества сервиса. Мы не передаём персональные данные третьим лицам без вашего согласия.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Защита данных</h2>
                <p>Компания принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Права пользователей</h2>
                <p>Вы имеете право запросить информацию о своих персональных данных, потребовать их изменения или удаления, обратившись по контактным данным, указанным на сайте.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Контакты</h2>
                <p>По вопросам обработки персональных данных обращайтесь: info@partner.com</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. General Provisions</h2>
                <p>This Privacy Policy defines the procedure for processing and protecting personal data of users of the Partner.COM website (hereinafter — "Company").</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Information Collection</h2>
                <p>The Company collects information that you provide when filling out forms on the website: name, email address, phone number, company name, and the content of your inquiry.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Use of Information</h2>
                <p>Collected information is used exclusively for processing your requests, providing services, and improving service quality. We do not share personal data with third parties without your consent.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Data Protection</h2>
                <p>The Company takes necessary organizational and technical measures to protect personal data from unauthorized access, modification, disclosure, or destruction.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. User Rights</h2>
                <p>You have the right to request information about your personal data, request its modification or deletion by contacting us using the contact details provided on the website.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Contact</h2>
                <p>For personal data processing inquiries, contact: info@partner.com</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqData = {
  investors: {
    ru: [
      { q: "Какой минимальный порог входа?", a: "Минимальная стоимость активов, с которыми мы работаем — ₽300 млн. Это обеспечивает качество объектов и серьёзность участников." },
      { q: "Как происходит отбор объектов?", a: "Мы проводим предварительный скрининг по 40+ параметрам, включая финансовые показатели, юридическую чистоту и потенциал роста." },
      { q: "Какие документы я получу перед сделкой?", a: "Инвестиционный меморандум, отчёт об оценке, результаты due diligence, финансовую модель и заключение юристов." },
      { q: "Как обеспечивается конфиденциальность?", a: "Все участники подписывают NDA. Информация передаётся поэтапно, с контролем доступа на каждом уровне." },
      { q: "Какая комиссия за услуги?", a: "Комиссия зависит от типа и объёма сделки. Обычно составляет 2–5% от суммы сделки. Обсуждается индивидуально." },
      { q: "Можно ли инвестировать через SPV?", a: "Да, мы помогаем структурировать сделки через SPV, в том числе в иностранных юрисдикциях." },
      { q: "Как долго длится типичная сделка?", a: "От первого контакта до закрытия — обычно 3–8 месяцев в зависимости от сложности актива." },
      { q: "Работаете ли вы с иностранными инвесторами?", a: "Да, мы имеем опыт работы с международными инвесторами и обеспечиваем полное сопровождение на английском языке." },
    ],
    en: [
      { q: "What is the minimum entry threshold?", a: "The minimum asset value we work with is ₽300M. This ensures object quality and participant seriousness." },
      { q: "How are objects selected?", a: "We conduct preliminary screening across 40+ parameters, including financials, legal cleanliness, and growth potential." },
      { q: "What documents will I receive before the deal?", a: "Investment memorandum, valuation report, due diligence results, financial model, and legal opinion." },
      { q: "How is confidentiality ensured?", a: "All participants sign NDAs. Information is shared in stages with access control at each level." },
      { q: "What is the service commission?", a: "Commission depends on deal type and volume. Usually 2-5% of deal value. Discussed individually." },
      { q: "Can I invest through an SPV?", a: "Yes, we help structure deals through SPVs, including in foreign jurisdictions." },
      { q: "How long does a typical deal take?", a: "From first contact to closing — usually 3-8 months depending on asset complexity." },
      { q: "Do you work with foreign investors?", a: "Yes, we have experience with international investors and provide full English-language support." },
    ],
  },
  buyers: {
    ru: [
      { q: "Как начать поиск актива?", a: "Оставьте заявку с описанием критериев — тип актива, регион, бюджет, желаемая доходность. Мы подберём подходящие варианты." },
      { q: "Все ли активы проверены?", a: "Да, каждый актив проходит предварительную проверку. Полный due diligence проводится перед сделкой за счёт покупателя." },
      { q: "Можно ли осмотреть актив?", a: "Разумеется. После подписания NDA и подтверждения финансовой готовности мы организуем визит на объект." },
      { q: "Какие гарантии безопасности сделки?", a: "Сделка проходит через эскроу-счёт, все документы заверяются нотариально, привлекаются независимые юристы." },
      { q: "Помогаете ли вы с финансированием?", a: "Мы можем порекомендовать банки-партнёры и помочь в структурировании финансирования." },
      { q: "Есть ли скрытые платежи?", a: "Нет. Все условия сотрудничества прозрачны и фиксируются в договоре до начала работы." },
      { q: "Работаете ли вы по всей России?", a: "Да, мы работаем во всех регионах РФ и имеем партнёров в 40+ субъектах." },
      { q: "Что если актив не подошёл?", a: "Мы продолжим поиск. Наша задача — найти объект, который полностью соответствует вашим критериям." },
    ],
    en: [
      { q: "How do I start searching for an asset?", a: "Submit a request with your criteria — asset type, region, budget, desired return. We'll find suitable options." },
      { q: "Are all assets verified?", a: "Yes, each asset undergoes preliminary verification. Full due diligence is conducted before the deal at buyer's expense." },
      { q: "Can I inspect the asset?", a: "Of course. After signing an NDA and confirming financial readiness, we'll arrange a site visit." },
      { q: "What deal security guarantees exist?", a: "The deal goes through escrow, all documents are notarized, independent lawyers are engaged." },
      { q: "Do you help with financing?", a: "We can recommend partner banks and help structure financing." },
      { q: "Are there hidden fees?", a: "No. All cooperation terms are transparent and fixed in the contract before work begins." },
      { q: "Do you work across all of Russia?", a: "Yes, we operate in all Russian regions with partners in 40+ subjects." },
      { q: "What if the asset doesn't fit?", a: "We'll continue searching. Our goal is to find an object that fully matches your criteria." },
    ],
  },
  sellers: {
    ru: [
      { q: "Сколько стоят ваши услуги?", a: "Комиссия обычно составляет 2–4% от суммы сделки. Точные условия обсуждаются индивидуально." },
      { q: "Как быстро можно продать актив?", a: "Средний срок — 4–6 месяцев. Зависит от типа актива, цены и рыночных условий." },
      { q: "Нужна ли предпродажная подготовка?", a: "Мы рекомендуем провести аудит и подготовить документацию. Помогаем на каждом этапе." },
      { q: "Кто определяет цену?", a: "Мы проводим независимую оценку и рекомендуем ценовой диапазон. Финальное решение за вами." },
      { q: "Как обеспечивается конфиденциальность?", a: "Информация о продаже раскрывается только верифицированным покупателям после подписания NDA." },
      { q: "Можно ли продать часть бизнеса?", a: "Да, мы работаем как с полной продажей, так и с продажей долей и привлечением партнёров." },
      { q: "Что если я передумаю продавать?", a: "Вы можете отказаться от продажи на любом этапе до подписания обязывающих документов." },
      { q: "Какие активы вы берёте в работу?", a: "Бизнесы, коммерческую недвижимость, производственные объекты, земельные активы от ₽300 млн." },
    ],
    en: [
      { q: "How much do your services cost?", a: "Commission is usually 2-4% of the deal value. Exact terms are discussed individually." },
      { q: "How quickly can an asset be sold?", a: "Average timeline is 4-6 months. Depends on asset type, price, and market conditions." },
      { q: "Is pre-sale preparation needed?", a: "We recommend conducting an audit and preparing documentation. We help at every stage." },
      { q: "Who determines the price?", a: "We conduct independent valuation and recommend a price range. The final decision is yours." },
      { q: "How is confidentiality ensured?", a: "Sale information is only disclosed to verified buyers after NDA signing." },
      { q: "Can I sell part of the business?", a: "Yes, we work with both full sales and stake sales, as well as partner attraction." },
      { q: "What if I change my mind about selling?", a: "You can withdraw from the sale at any stage before signing binding documents." },
      { q: "What assets do you work with?", a: "Businesses, commercial real estate, manufacturing facilities, land assets from ₽300M." },
    ],
  },
};

const FAQPage = () => {
  const { lang } = useLanguage();

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Частые вопросы" : "Frequently Asked Questions"}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <Tabs defaultValue="investors">
            <TabsList className="w-full mb-8">
              <TabsTrigger value="investors" className="flex-1">
                {lang === "ru" ? "Инвесторам" : "Investors"}
              </TabsTrigger>
              <TabsTrigger value="buyers" className="flex-1">
                {lang === "ru" ? "Покупателям" : "Buyers"}
              </TabsTrigger>
              <TabsTrigger value="sellers" className="flex-1">
                {lang === "ru" ? "Продавцам" : "Sellers"}
              </TabsTrigger>
            </TabsList>

            {(["investors", "buyers", "sellers"] as const).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqData[tab][lang].map((item, i) => (
                    <AccordionItem key={i} value={`${tab}-${i}`} className="bg-card rounded-lg border border-border px-4">
                      <AccordionTrigger className="text-left font-semibold hover:text-accent">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;

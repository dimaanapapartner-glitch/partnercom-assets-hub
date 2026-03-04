import { useLanguage } from "@/contexts/LanguageContext";
import { Asset } from "@/data/assets";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Hotel, Wheat, Warehouse, ShoppingBag, LandPlot } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  "Производство": <Factory className="w-8 h-8" />,
  "Коммерческая недвижимость": <Building2 className="w-8 h-8" />,
  "Гостиничный бизнес": <Hotel className="w-8 h-8" />,
  "Сельское хозяйство": <Wheat className="w-8 h-8" />,
  "Логистика": <Warehouse className="w-8 h-8" />,
  "Ритейл": <ShoppingBag className="w-8 h-8" />,
  "Участки": <LandPlot className="w-8 h-8" />,
};

const statusColors: Record<string, string> = {
  sale: "bg-green-100 text-green-800",
  negotiation: "bg-amber-100 text-amber-800",
  closed: "bg-muted text-muted-foreground",
};

const statusLabels = {
  sale: { ru: "В продаже", en: "For Sale" },
  negotiation: { ru: "В переговорах", en: "In Negotiation" },
  closed: { ru: "Закрыт", en: "Closed" },
};

export const AssetCard = ({ asset, detailed = false }: { asset: Asset; detailed?: boolean }) => {
  const { lang } = useLanguage();

  return (
    <div className="bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg overflow-hidden group">
      {/* Icon header */}
      <div className="h-40 navy-gradient flex items-center justify-center text-accent/60 group-hover:text-accent transition-colors">
        {typeIcons[asset.type.ru] || <Building2 className="w-8 h-8" />}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[asset.status]}`}>
            {statusLabels[asset.status][lang]}
          </span>
          <span className="text-xs text-muted-foreground">{asset.region[lang]}</span>
        </div>

        <h3 className="font-bold text-lg mb-1 text-foreground">{asset.title[lang]}</h3>
        <p className="text-sm text-muted-foreground mb-3">{asset.type[lang]}</p>

        <div className="text-2xl font-bold text-accent mb-4">{asset.price}</div>

        {detailed && (
          <>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{asset.description[lang]}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {asset.metrics.map((m, i) => (
                <div key={i} className="bg-muted rounded-md p-2.5">
                  <div className="text-xs text-muted-foreground">{m.label[lang]}</div>
                  <div className="font-semibold text-sm text-foreground">{m.value}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {!detailed && (
          <div className="flex gap-3 text-xs text-muted-foreground mb-4">
            {asset.metrics.slice(0, 2).map((m, i) => (
              <span key={i}>{m.label[lang]}: <span className="font-semibold text-foreground">{m.value}</span></span>
            ))}
          </div>
        )}

        <Button variant="goldOutline" className="w-full" size="sm">
          {lang === "ru" ? "Запросить информацию" : "Request Information"}
        </Button>
      </div>
    </div>
  );
};

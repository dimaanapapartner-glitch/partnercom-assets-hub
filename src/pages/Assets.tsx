import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AssetCard } from "@/components/AssetCard";
import { assets, assetTypeOptions, regionOptions } from "@/data/assets";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Assets = () => {
  const { lang } = useLanguage();
  const [typeFilter, setTypeFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = assets.filter((a) => {
    if (typeFilter !== "all" && a.type.ru !== typeFilter) return false;
    if (regionFilter !== "all" && a.region.ru !== regionFilter) return false;
    if (statusFilter !== "all" && a.status !== statusFilter) return false;
    return true;
  });

  return (
    <Layout>
      <section className="navy-gradient text-primary-foreground section-padding pb-12">
        <div className="container mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "ru" ? "Каталог" : "Catalog"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === "ru" ? "Активы в продаже" : "Assets for Sale"}
          </h1>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 p-4 bg-card rounded-lg border border-border">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder={lang === "ru" ? "Тип актива" : "Asset Type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{lang === "ru" ? "Все типы" : "All Types"}</SelectItem>
                {assetTypeOptions.slice(1).map((t, i) => (
                  <SelectItem key={i} value={t.ru}>{t[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder={lang === "ru" ? "Регион" : "Region"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{lang === "ru" ? "Все регионы" : "All Regions"}</SelectItem>
                {regionOptions.slice(1).map((r, i) => (
                  <SelectItem key={i} value={r.ru}>{r[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder={lang === "ru" ? "Статус" : "Status"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{lang === "ru" ? "Все статусы" : "All Statuses"}</SelectItem>
                <SelectItem value="sale">{lang === "ru" ? "В продаже" : "For Sale"}</SelectItem>
                <SelectItem value="negotiation">{lang === "ru" ? "В переговорах" : "In Negotiation"}</SelectItem>
                <SelectItem value="closed">{lang === "ru" ? "Закрыт" : "Closed"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">
            {lang === "ru" ? `Найдено: ${filtered.length}` : `Found: ${filtered.length}`}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((asset) => (
                <AssetCard key={asset.id} asset={asset} detailed />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              {lang === "ru" ? "Активы не найдены. Попробуйте изменить фильтры." : "No assets found. Try adjusting filters."}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Assets;

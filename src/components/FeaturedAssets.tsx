import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { assets } from "@/data/assets";
import { AssetCard } from "@/components/AssetCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturedAssets = () => {
  const { lang } = useLanguage();
  const featured = assets.filter((a) => a.featured);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              {lang === "ru" ? "Каталог" : "Catalog"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {lang === "ru" ? "Избранные активы" : "Featured Assets"}
            </h2>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex text-accent hover:text-accent">
            <Link to="/assets">
              {lang === "ru" ? "Все активы" : "All Assets"}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="goldOutline" asChild>
            <Link to="/assets">
              {lang === "ru" ? "Смотреть все активы" : "View All Assets"}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

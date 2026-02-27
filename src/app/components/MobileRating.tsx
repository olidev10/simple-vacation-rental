import { useMemo } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import RatingSummary from "./RatingSummary";
import ReviewCard, { ReviewData } from "./ReviewCard";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { useTranslation } from "react-i18next";
import CountUp from "./ui/count-up";

const AIRBNB_REVIEWS_URL =
  "https://www.airbnb.com.br/rooms/1358899180534366297/reviews";

const MAX_REVIEWS_DISPLAY = 10;

function getSortTimestamp(review: { time?: number; date?: string }): number {
  if (review.time != null) return review.time * 1000;
  if (!review.date) return 0;
  const d = review.date;
  if (d.includes("-")) return new Date(d).getTime();
  const [day, month, year] = d.split("/");
  if (day && month && year)
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  return 0;
}

export function MobileRating() {
  const { reviews, rating, totalReviews, isLoading } = useGoogleReviews();
  const { t } = useTranslation();

  const mappedReviews = useMemo(() => {
    return reviews.map((review, index) => {
      let displayDate = "Data não disponível";

      if (review.time != null) {
        const dateObj = new Date(review.time * 1000);
        displayDate = dateObj.toLocaleDateString("pt-BR");
      } else if (review.date) {
        const parts = review.date.split("-");
        if (parts.length === 2) {
          displayDate = `${parts[1]}/${parts[0]}`;
        } else if (review.date.includes("/")) {
          displayDate = review.date;
        } else {
          displayDate = parts.reverse().join("/");
        }
      }

      return {
        id: `${review.name}-${review.time ?? index}`,
        author: review.name,
        avatar: review.profilePhoto,
        rating: review.rating,
        date: displayDate,
        title:
          review.quote && review.quote.length > 60
            ? `${review.quote.slice(0, 57)}...`
            : review.quote || "",
        comment: review.quote || "",
        helpful: 0,
        verified: review.source === "airbnb",
        tags: review.source
          ? [review.source === "airbnb" ? "Airbnb" : "Google"]
          : undefined,
        sortTimestamp: getSortTimestamp(review),
      };
    });
  }, [reviews]);

  const ratingDistribution = useMemo(() => {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => {
      const star = Math.round(r.rating) as 1 | 2 | 3 | 4 | 5;
      dist[star] = (dist[star] || 0) + 1;
    });
    return dist;
  }, [reviews]);

  const displayedReviews = useMemo(() => {
    return [...mappedReviews]
      .sort((a, b) => b.sortTimestamp - a.sortTimestamp)
      .slice(0, MAX_REVIEWS_DISPLAY) as ReviewData[];
  }, [mappedReviews]);

  return (
    <div className="px-4 py-4 space-y-4 bg-gray-200">

      <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            {t("reviews.sectionLabel")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
            {t("reviews.titlePrefix")}
            <span className="text-transparent bg-clip-text bg-gradient-ocean">
            {t("reviews.titleHighlight")}
            </span>
          </h2>
          
          <div className="mx-auto">
            <p className="text-gray-600 not-odd:text-text-lg max-w-2xl ">
              {t("reviews.introBefore")}
              <span className="font-bold">
                <CountUp end={10} duration={2} />
              </span>
              {t("reviews.introAfter")}
            </p>
        </div>
        </div>

      <RatingSummary
        average={rating}
        total={totalReviews}
        distribution={ratingDistribution}
      />

      <div className="space-y-3 pb-4">
        {isLoading && mappedReviews.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-sm">
              Carregando avaliações...
            </p>
          </div>
        ) : displayedReviews.length > 0 ? (
          <>
            {displayedReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
            <div className="flex justify-center pt-4">
              <Link
                href={AIRBNB_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-ocean text-white  hover:opacity-90 transition-opacit text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                {t("reviews.viewMoreOnAirbnb")}
                <ExternalLink size={16} />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-sm">
              Nenhuma avaliação encontrada
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

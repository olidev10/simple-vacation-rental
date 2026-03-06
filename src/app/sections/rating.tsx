"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { Star } from "lucide-react";
import CountUp from "@/app/components/ui/count-up";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const GOOGLE_MAPS_LINK =
"https://www.google.com/maps/place/Residhotel+Galerie+Tatry/@44.8630439,-0.573862,18.44z/data=!4m18!1m8!3m7!1s0xd55286605d8579b:0xf400ef4e7f018ac4!2s151+Cr+du+M%C3%A9doc,+33300+Bordeaux!3b1!8m2!3d44.8634536!4d-0.5725778!16s%2Fg%2F11pw1xwvqq!3m8!1s0xd552866000c98d1:0x301cff1feb5bc9bc!5m2!4m1!1i2!8m2!3d44.8630419!4d-0.5742081!16s%2Fg%2F1tftsdrr?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D";

export function Rating() {
  const { t } = useTranslation();
  const {
    reviews,
    rating,
    totalReviews,
    googleRating,
    googleTotal,
    isLoading,
    error,
  } = useGoogleReviews();

  return (
    <div className="min-h-[40rem]  flex flex-col antialiased items-center justify-center relative overflow-hidden bg-gray-200 py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
            {t("reviews.sectionLabel")}
          </p>
        </div>

        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span className="text-gray-900">{t("reviews.titlePrefix")}</span>
            <span className="text-primary">{t("reviews.titleHighlight")}</span>
          </h2>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("reviews.introBefore")}
            <span className="font-bold">
              <CountUp end={10} duration={2} />
            </span>
            {t("reviews.introAfter")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 max-w-xs mx-auto">
          <div className="bg-white rounded-2xl shadow-xl px-2 py-4 w-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400 stroke-amber-400"
                />
              ))}
            </div>

            <div className="flex items-baseline gap-2 justify-center mb-2">
              <span className="text-5xl font-bold text-gray-900">
                {rating.toFixed(1).replace(".", ",")}
              </span>
              <span className="text-2xl text-gray-500">/ 5.0</span>
            </div>

            <p className="text-sm text-gray-600 text-center mb-6">
              {t("reviews.based")} {totalReviews} {t("reviews.reviewsCount")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              {googleTotal > 0 && (
                <Link
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg w-full sm:w-auto"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="#4285F4"
                    />
                  </svg>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-blue-700 text-sm">
                      {googleRating.toFixed(1).replace(".", ",")} · Google
                    </div>
                    <div className="text-xs text-blue-600">
                      {googleTotal} {t("reviews.reviewsCount")}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {error && (
            <div className="text-center text-xs text-amber-600 mt-4">
              ⚠️ {t("reviews.offline")}
            </div>
          )}

          {isLoading && reviews.length === 0 && (
            <div className="text-center text-sm text-gray-500 mt-4">
              {t("reviews.loading")}
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <InfiniteMovingCards
          items={reviews}
          direction="right"
          speed="normal"
          pauseOnHover
        />
      </div>
    </div>
  );
}

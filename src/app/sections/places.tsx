"use client";

import { useTranslation } from "react-i18next";
import CircularGallery from "../components/CircularGallery";
import { cloudinaryOptimize } from "@/lib/utils";

const PLACES_KEYS = {
  camaAnchieta: true,
  passarelaAnchieta: true,
  praiaCibratel: true,
  morroParanambuco: true,
  mulheresAreia: true,
  centrinho: true,
  praiaSuarao: true,
  praiaSonho: true,
} as const;

type PlaceKey = keyof typeof PLACES_KEYS;

const PLACES_RAW: { image: string; textKey: PlaceKey }[] = [
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770213287/Cama_de_Anchieta_-_Itanha%C3%A9m_-_SP_jqeegq.jpg", textKey: "camaAnchieta" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770217378/WhatsApp_Image_2026-02-04_at_12.01.51_twqkqc.jpg", textKey: "passarelaAnchieta" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770213939/Itanha%C3%A9m_vxhgyn.jpg", textKey: "praiaCibratel" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770216030/unnamed_zgoims.webp", textKey: "morroParanambuco" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770216216/unnamed_1_h8szat.jpg", textKey: "mulheresAreia" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770216829/unnamed_2_tskt2g.webp", textKey: "centrinho" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770217160/Praia-do-Suarao-Itanhaem-Praiao-SP_q17x4r.jpg", textKey: "praiaSuarao" },
  { image: "https://res.cloudinary.com/dmeglebnu/image/upload/v1770217379/WhatsApp_Image_2026-02-04_at_12.01.51_1_blwj9d.jpg", textKey: "praiaSonho" },
];

export function Places() {
  const { t } = useTranslation();
  const places = PLACES_RAW.map((p) => ({
    image: cloudinaryOptimize(p.image),
    text: t(`places.items.${p.textKey}`),
  }));

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            {t("places.title")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
            {t("places.subtitle")}
            <span className="text-transparent bg-clip-text bg-gradient-ocean">
            {t("places.description")}
            </span>
          </h2>
          <p className="text-gray-600 not-odd:text-text-lg max-w-2xl mx-auto">
            {t("places.dragHint")}
          </p>
        </div>

        {/* Gallery */}
        <CircularGallery
          items={places}
          bend={0.5}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.05}
          font=" 14px Inter, system-ui, -apple-system, sans-serif"
          scrollSpeed={1.8}
        />

      </div>
    </section>
  );
}

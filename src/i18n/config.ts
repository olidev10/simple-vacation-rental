import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang === "fr" || savedLang === "en") return savedLang;
    if (savedLang === "pt") return "fr";

    const browserLang = navigator.language.split("-")[0];
    return ["fr", "en"].includes(browserLang) ? browserLang : "fr";
  }
  return "fr";
};

const photoTranslations = {
  1: {
    title: "Piscine",
    alt: "Piscine privative de 5 m avec eclairage LED et espace detente lateral",
  },
  2: {
    title: "Decoration",
    alt: "Ambiance instagrammable avec jardin artificiel et eclairage RGB",
  },
  3: {
    title: "Espace Exterieur",
    alt: "Grand espace avec piscine et cascade relaxante pour les loisirs en famille",
  },
  4: {
    title: "Intimite",
    alt: "Maison d angle avec meilleure ventilation, cameras 24h et surveillance",
  },
  5: {
    title: "Garage",
    alt: "Parking prive avec 3 places securisees dans la propriete",
  },
  6: {
    title: "Salon",
    alt: "Salon confortable avec Smart TV 50 pouces et canape-lit",
  },
  7: {
    title: "Espace Gourmet",
    alt: "Espace barbecue equipe integre a l aire de loisirs",
  },
  8: {
    title: "Cuisine",
    alt: "Cuisine fonctionnelle avec refrigerateur, cooktop et ustensiles complets",
  },
  9: {
    title: "Salles de Bain",
    alt: "Maison avec 2 salles de bain modernes et lavabo social avec eau chaude",
  },
  10: {
    title: "Chambre 1",
    alt: "Suite principale avec lit double et lits simples",
  },
  11: {
    title: "Chambre 2",
    alt: "Deuxieme suite privee avec excellente luminosite et confort",
  },
  12: {
    title: "Chambre",
    alt: "Chambre confortable avec bonne ventilation naturelle",
  },
  13: {
    title: "Facade",
    alt: "Vue exterieure de la maison de vacances",
  },
  14: {
    title: "Loisirs",
    alt: "Espace de loisirs pense pour des moments en famille",
  },
  15: {
    title: "Salle a Manger",
    alt: "Salle a manger integree avec espace pour toute la famille",
  },
  16: {
    title: "Exterieur",
    alt: "Perspective exterieure de la propriete avec zone detente",
  },
  17: {
    title: "Piscine de Nuit",
    alt: "Piscine eclairee de nuit dans une ambiance chaleureuse",
  },
  18: {
    title: "Details",
    alt: "Details de la maison qui renforcent le confort du sejour",
  },
} as const;

const photoTranslationsEn = {
  1: {
    title: "Pool",
    alt: "Private 5m pool with LED lighting and a side lounge area",
  },
  2: {
    title: "Decoration",
    alt: "Instagrammable setting with an artificial garden and RGB lighting",
  },
  3: {
    title: "Outdoor Area",
    alt: "Spacious area with pool and relaxing waterfall for family leisure",
  },
  4: {
    title: "Privacy",
    alt: "Corner house with better ventilation, 24h cameras, and monitoring",
  },
  5: {
    title: "Garage",
    alt: "Private parking with 3 secure spaces inside the property",
  },
  6: {
    title: "Living Room",
    alt: "Cozy living room with a 50-inch Smart TV and sofa bed",
  },
  7: {
    title: "Gourmet Area",
    alt: "Equipped barbecue area integrated with the leisure space",
  },
  8: {
    title: "Kitchen",
    alt: "Functional kitchen with fridge, cooktop, and full utensils",
  },
  9: {
    title: "Bathrooms",
    alt: "House with 2 modern bathrooms and a social washroom with hot water",
  },
  10: {
    title: "Bedroom 1",
    alt: "Master suite with one double bed and single beds",
  },
  11: {
    title: "Bedroom 2",
    alt: "Second private suite with excellent lighting and comfort",
  },
  12: {
    title: "Bedroom",
    alt: "Comfortable bedroom with good natural ventilation",
  },
  13: {
    title: "Facade",
    alt: "Exterior view of the vacation house",
  },
  14: {
    title: "Leisure",
    alt: "Leisure area designed for family moments",
  },
  15: {
    title: "Dining Area",
    alt: "Integrated dining area with room for the whole family",
  },
  16: {
    title: "Exterior",
    alt: "Exterior perspective of the property with chill area",
  },
  17: {
    title: "Night Pool",
    alt: "Pool at night with a cozy atmosphere",
  },
  18: {
    title: "Details",
    alt: "House details that improve stay comfort",
  },
} as const;

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "A propos",
        amenities: "Commodites",
        photos: "Photos",
        reviews: "Avis",
        contact: "Contact",
      },
      hero: {
        title: "Explorez Votre Maison de Plage",
        subtitle: "de Reve",
        data: "Selectionnez les dates",
        guests: "Selectionnez les voyageurs",
        guest_singular: "voyageur",
        guest_plural: "voyageurs",
        dataLabel: "Dates",
        guestsLabel: "Voyageurs",
        buttonNext: "Suivant",
        adults: "Adultes",
        children: "Enfants",
        babies: "Bebes",
        animals: "Animaux",
        confirm: "Confirmer",
      },
      amenities: {
        title: "Commodites",
        subtitle: "Tout Pour Votre ",
        description: "Confort",
        pool: "Piscine Privee",
        poolDesc:
          "Profitez d une piscine exclusive avec eclairage LED moderne, parfaite pour se detendre a tout moment de la journee.",
        bbq: "Espace Barbecue",
        bbqDesc:
          "Espace gourmet complet avec barbecue et comptoir, ideal pour des repas speciaux en famille ou entre amis.",
        wifi: "Wi-Fi Rapide",
        wifiDesc:
          "Connexion fibre optique haut debit dans toute la propriete, pour le travail comme pour les loisirs.",
        parking: "Parking",
        parkingDesc:
          "Garage prive et securise pouvant accueillir jusqu a 3 vehicules, pour un sejour pratique.",
        ac: "Ventilation",
        acDesc:
          "Ventilateurs de plafond performants dans les chambres et le salon pour un confort thermique ideal.",
        kitchen: "Cuisine Complete",
        kitchenDesc:
          "Equipee d un refrigerateur, d un cooktop et de tous les ustensiles necessaires pour preparer vos repas.",
        tv: "Smart TV",
        tvDesc:
          "Smart TV 50 pouces avec acces aux chaines et plateformes de streaming comme Netflix.",
        security: "Securite 24h",
        securityDesc:
          "Propriete surveillee par des cameras exterieures et protegee par cloture electrique.",
      },
      photos: {
        galleryLabel: "GALERIE",
        sectionTitle: "Explorez Notre",
        sectionTitleHighlight: "Maison de Plage",
        sectionDescription: "Decouvrez chaque detail de nos espaces",
        title: "Galerie Photos",
        subtitle: "Decouvrez Notre ",
        subtitle2: "Maison",
        description:
          "Chaque detail est pense pour vous offrir des vacances inoubliables",
        showLess: "Voir plus",
        showMore: "Voir moins",
        images: photoTranslations,
      },
      places: {
        title: "Lieux Touristiques",
        subtitle: "Belles Plages et Culture Locale a Quelques ",
        description: "Minutes",
        dragHint: "Faites glisser pour explorer les points touristiques",
        items: {
          camaAnchieta: "Cama de Anchieta",
          passarelaAnchieta: "Passerelle d Anchieta",
          praiaCibratel: "Plage de Cibratel",
          morroParanambuco: "Morro do Paranambuco",
          mulheresAreia: "Statue Mulheres de Areia",
          centrinho: "Centre-ville",
          praiaSuarao: "Plage de Suarao",
          praiaSonho: "Plage do Sonho",
        },
      },
      reviews: {
        sectionLabel: "TEMOIGNAGES",
        title: "Avis",
        subtitle: "Ce Que Disent Nos Voyageurs",
        titlePrefix: "Ce Que Disent Nos ",
        titleHighlight: "Voyageurs",
        introBefore: "affichage des ",
        introAfter: " avis les plus recents",
        based: "Base sur",
        reviewsCount: "avis",
        reviews_count: "avis",
        verified: "Avis verifies sur Google",
        viewAll: "Voir Tous Les Avis",
        viewMoreOnAirbnb: "Voir plus sur Airbnb",
        google: "Google",
        airbnb: "Airbnb",
        loading: "Chargement des avis Google...",
        offline: "Avis en mode hors ligne",
      },
      footer: {
        tagline:
          "Votre maison de plage ideale avec piscine privee, vue mer et tout le confort pour des vacances inoubliables.",
        quickLinks: "Liens Rapides",
        home: "Accueil",
        photos: "Photos",
        amenities: "Commodites",
        reviews: "Avis",
        reserve: "Reserver",
        contact: "Nous contacter",
        hours: "Horaires",
        checkIn: "Check-in",
        checkOut: "Check-out",
        serviceHours: "Service",
        serviceNote: "Nous repondons sous 2 heures pendant les horaires de service",
        rights: "Tous droits reserves",
        madeWith: "Fait avec",
        madeWithLove: "pour vos vacances parfaites",
      },
      reservation: {
        rotating1: "Demandez",
        rotating2: "Des Maintenant",
        rotating3: "Votre Devis",
        subtitle:
          "Reservez votre sejour de reve et profitez de moments inoubliables au bord de la mer",
        formTitle: "Reservez Votre",
        formTitleHighlight: "Experience",
        formSubtitle:
          "Remplissez le formulaire et recevez votre devis personnalise sur WhatsApp en quelques minutes.",
        checkIn: "Arrivee",
        checkOut: "Depart",
        guests: "Voyageurs",
        checkInTime: "Heure d Arrivee",
        selectPlaceholder: "Selectionner",
        timePlaceholder: "Selectionnez l heure",
        morning: "Matin (09:00 - 12:00)",
        evening: "Soir (18:00 - 22:00)",
        yourName: "Votre Nom",
        namePlaceholder: "Entrez votre nom",
        guestsPlaceholder: "Quantite",
        submit: "Demander un Devis",
        whatsappNote: "Vous serez redirige vers WhatsApp",
        whatsappMessage: "Bonjour ! Je souhaite demander un devis",
        messageName: "Nom",
        messageCheckIn: "Date d arrivee",
        messageCheckOut: "Date de depart",
        messageTime: "Heure d arrivee",
        messageGuests: "Voyageurs",
        requiredError: "Veuillez remplir tous les champs obligatoires.",
      },
      gallery: {
        prev: "Precedent",
        next: "Suivant",
      },
      dock: {
        home: "Accueil",
        calendar: "Calendrier",
        photos: "Photos",
        reviews: "Avis",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        amenities: "Amenities",
        photos: "Photos",
        reviews: "Reviews",
        contact: "Contact",
      },
      hero: {
        title: "Explore Your Dream",
        subtitle: "Beach House",
        data: "Select the dates",
        guests: "Select guests",
        guest_singular: "guest",
        guest_plural: "guests",
        dataLabel: "Dates",
        guestsLabel: "Guests",
        buttonNext: "Next",
        adults: "Adults",
        children: "Children",
        babies: "Babies",
        animals: "Animals",
        confirm: "Confirm",
      },
      amenities: {
        title: "Amenities",
        subtitle: "Everything for Your ",
        description: "Comfort",
        pool: "Private Pool",
        poolDesc:
          "Enjoy an exclusive pool with modern LED lighting, perfect for relaxing at any time of the day or night.",
        bbq: "Barbecue Area",
        bbqDesc:
          "Complete gourmet space with barbecue and counter, ideal for preparing special meals with family and friends.",
        wifi: "Fast Wi-Fi",
        wifiDesc:
          "High-speed fiber optic connection throughout the property, ensuring stability for work or leisure.",
        parking: "Parking",
        parkingDesc:
          "Secure private garage with capacity for up to 3 vehicles, offering full convenience during your stay.",
        ac: "Ventilation",
        acDesc:
          "High-performance ceiling fans installed in all bedrooms and the living room to ensure ideal thermal comfort.",
        kitchen: "Full Kitchen",
        kitchenDesc:
          "Equipped with refrigerator, cooktop, and all necessary utensils for the practical preparation of your favorite meals.",
        tv: "Smart TV",
        tvDesc:
          '50" Smart TV with access to various channels and streaming platforms like Netflix for your family fun.',
        security: "24h Security",
        securityDesc:
          "Property monitored by external cameras and protected by electric fencing, ensuring peace of mind for all guests.",
      },
      photos: {
        galleryLabel: "GALLERY",
        sectionTitle: "Explore Our",
        sectionTitleHighlight: "Beach House",
        sectionDescription: "Discover every detail of our spaces",
        title: "Photo Gallery",
        subtitle: "Discover ",
        subtitle2: "Our House",
        description: "Every detail designed to provide an unforgettable vacation",
        showLess: "Show more",
        showMore: "Show less",
        images: photoTranslationsEn,
      },
      places: {
        title: "Tourist Places",
        subtitle: "Beautiful Beaches and Rich Culture a Few ",
        description: "Minutes Away",
        dragHint: "Drag to explore the region's tourist spots",
        items: {
          camaAnchieta: "Cama de Anchieta",
          passarelaAnchieta: "Anchieta Boardwalk",
          praiaCibratel: "Cibratel Beach",
          morroParanambuco: "Morro do Paranambuco",
          mulheresAreia: "Mulheres de Areia Statue",
          centrinho: "Downtown",
          praiaSuarao: "Suarao Beach",
          praiaSonho: "Praia do Sonho",
        },
      },
      reviews: {
        sectionLabel: "TESTIMONIALS",
        title: "Testimonials",
        subtitle: "What Our Guests Say",
        titlePrefix: "What Our ",
        titleHighlight: "Guests Say",
        introBefore: "showing ",
        introAfter: " the most recent reviews",
        based: "Based on",
        reviewsCount: "reviews",
        reviews_count: "reviews",
        verified: "Verified reviews on Google",
        viewAll: "View All Reviews",
        viewMoreOnAirbnb: "View more on Airbnb",
        google: "Google",
        airbnb: "Airbnb",
        loading: "Loading Google reviews...",
        offline: "Reviews in offline mode",
      },
      footer: {
        tagline:
          "Your dream beach house with private pool, sea view and all the comforts for an unforgettable vacation.",
        quickLinks: "Quick Links",
        home: "Home",
        photos: "Photos",
        amenities: "Amenities",
        reviews: "Reviews",
        reserve: "Reserve",
        contact: "Get in touch",
        hours: "Hours",
        checkIn: "Check-in",
        checkOut: "Check-out",
        serviceHours: "Service",
        serviceNote: "We reply within 2 hours during service hours",
        rights: "All rights reserved",
        madeWith: "Made with",
        madeWithLove: "for your perfect vacation",
      },
      reservation: {
        rotating1: "Request",
        rotating2: "Right Now",
        rotating3: "Your Quote",
        subtitle:
          "Book your dream stay and enjoy unforgettable moments by the sea",
        formTitle: "Book your",
        formTitleHighlight: "Experience",
        formSubtitle:
          "Fill out the form and get your personalized quote via WhatsApp in minutes.",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guests: "Guests",
        checkInTime: "Check-in Time",
        selectPlaceholder: "Select",
        timePlaceholder: "Select time",
        morning: "Morning (09:00 - 12:00)",
        evening: "Evening (18:00 - 22:00)",
        yourName: "Your Name",
        namePlaceholder: "Enter your name",
        guestsPlaceholder: "Quantity",
        submit: "Request Quote",
        whatsappNote: "You will be redirected to WhatsApp",
        whatsappMessage: "Hi! I would like to request a quote",
        messageName: "Name",
        messageCheckIn: "Check-in date",
        messageCheckOut: "Check-out date",
        messageTime: "Check-in time",
        messageGuests: "Guests",
        requiredError: "Please fill all required fields.",
      },
      gallery: {
        prev: "Previous",
        next: "Next",
      },
      dock: {
        home: "Home",
        calendar: "Calendar",
        photos: "Photos",
        reviews: "Reviews",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  supportedLngs: ["fr", "en"],
  fallbackLng: "fr",
  lng: getInitialLanguage(),
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", lng);
  }
});

export default i18n;

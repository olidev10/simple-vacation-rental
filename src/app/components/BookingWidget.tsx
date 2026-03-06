"use client";

import {
  Users,
  ChevronRight,
  ChevronDownIcon,
  Plus,
  Minus,
  CalendarIcon,
} from "lucide-react";
import { Calendar } from "./ui/calendar";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonRounded } from "./ButtonRounded";
import { enUS, fr } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { useQuery } from "@tanstack/react-query";
import { getAirbnbCalendar, type Booking } from "@/lib/airbnbCalendar";
import { PopoverGuest } from "./PopoverGuest";

const BookingWidget = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);

  const [guests, setGuests] = useState({
    adultos: 0,
    criancas: 0,
    bebes: 0,
  });
  const [animals, setAnimals] = useState(0);
  const [guestsPopoverOpen, setGuestsPopoverOpen] = useState(false);
  const totalGuests = guests.adultos + guests.criancas;

  // Buscar reservas do Airbnb usando TanStack Query com cache de 30 minutos
  const {
    data: bookings = [],
    isLoading: loadingBookings,
    error: bookingsError,
  } = useQuery<Booking[]>({
    queryKey: ["airbnb-calendar"],
    queryFn: getAirbnbCalendar,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 2,
  });

  if (bookingsError) {
    console.error("❌ Erro ao buscar reservas:", bookingsError);
  }

  const isDateBooked = (date: Date): boolean => {
    if (bookings.length === 0) return false;
    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);
    return bookings.some((booking) => {
      const bookingStart = new Date(booking.start);
      bookingStart.setHours(0, 0, 0, 0);
      const bookingEnd = new Date(booking.end);
      bookingEnd.setHours(0, 0, 0, 0);
      return dateToCheck >= bookingStart && dateToCheck < bookingEnd;
    });
  };

  /** Retorna true se algum dia no intervalo [from, to) estiver bloqueado. */
  const isRangeIncludingBookedDays = (from: Date, to: Date): boolean => {
    const fromNorm = new Date(from);
    fromNorm.setHours(0, 0, 0, 0);
    const toNorm = new Date(to);
    toNorm.setHours(0, 0, 0, 0);
    for (const d = new Date(fromNorm); d < toNorm; d.setDate(d.getDate() + 1)) {
      if (isDateBooked(d)) return true;
    }
    return false;
  };

  const disabledDates = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);
    return dateToCheck < today || isDateBooked(date);
  };

  const handleCloseConfirmModal = () => {
    setGuestsPopoverOpen(false);
  };

  const goToReservation = () => {
    const params = new URLSearchParams();
    
    if (checkInDate) params.set("checkIn", checkInDate.toISOString());
    if (checkOutDate) params.set("checkOut", checkOutDate.toISOString());
    
    if (guests.adultos > 0) params.set("adults", String(guests.adultos));
    if (guests.criancas > 0) params.set("children", String(guests.criancas));
    if (guests.bebes > 0) params.set("babies", String(guests.bebes));
    if (animals > 0) params.set("animals", String(animals));
  
    const query = params.toString();
    const url = query ? `/?${query}#reservation` : `/#reservation`;
    
    router.push(url);
  
    setTimeout(() => {
      document.getElementById("reservation")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-2 sm:px-4 lg:px-10">
      <div className="bg-[hsl(var(--glass-bg))]/80 backdrop-blur-md rounded-lg px-3 sm:px-6 lg:px-20 py-4 sm:py-6 lg:py-10 border border-white/10">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-end">
          {/* Data Picker */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col gap-2 border-b border-white/20 pb-3">
              <Label
                htmlFor="date-picker"
                className="text-white/70 text-xs sm:text-sm md:text-md uppercase tracking-widest font-light"
              >
                {t("hero.dataLabel")}
              </Label>
              <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="checkout-date-picker"
                    className="w-full md:w-60 justify-between font-normal bg-transparent hover:bg-transparent hover:text-white/50 border-none shadow-none text-white/70 p-0! cursor-pointer text-xs sm:text-sm h-auto"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">
                        {checkInDate && checkOutDate
                          ? `${checkInDate.toLocaleDateString(i18n.language === "fr" ? "fr-FR" : "en-US")} - ${checkOutDate.toLocaleDateString(i18n.language === "fr" ? "fr-FR" : "en-US")}`
                          : checkInDate
                            ? `${checkInDate.toLocaleDateString(i18n.language === "fr" ? "fr-FR" : "en-US")} - ${t("reservation.checkOut")}`
                            : t("hero.data")}
                      </span>
                    </div>
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto bg-[#03303E]/70 backdrop-blur-xl border-none shadow-2xl text-white"
                  align="end"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col gap-2">
                    {(checkInDate || checkOutDate) && (
                      <button
                        type="button"
                        onClick={() => {
                          setCheckInDate(undefined);
                          setCheckOutDate(undefined);
                        }}
                        className="text-xs text-white/70 hover:text-white underline self-end"
                      >
                        {i18n.language === "fr" ? "Effacer les dates" : "Clear dates"}
                      </button>
                    )}
                    <Calendar
                      mode="range"
                      locale={i18n.language === "fr" ? fr : enUS}
                      selected={
                        checkInDate || checkOutDate
                          ? { from: checkInDate, to: checkOutDate }
                          : undefined
                      }
                      disabled={disabledDates}
                      excludeDisabled
                      modifiers={{ booked: (date) => isDateBooked(date) }}
                      modifiersClassNames={{
                        booked:
                          "opacity-40 line-through cursor-not-allowed text-red-300/50",
                      }}
                      classNames={{
                        day_disabled:
                          "opacity-40 line-through cursor-not-allowed text-red-300",
                      }}
                      onSelect={(range: DateRange | undefined) => {
                        if (range) {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          if (range.from) {
                            const fromNorm = new Date(range.from);
                            fromNorm.setHours(0, 0, 0, 0);
                            if (fromNorm < today) return;
                            if (isDateBooked(range.from)) return;
                          }
                          if (range.to) {
                            const toNorm = new Date(range.to);
                            toNorm.setHours(0, 0, 0, 0);
                            if (toNorm < today) return;
                            if (isDateBooked(range.to)) return;
                            if (
                              range.from &&
                              isRangeIncludingBookedDays(range.from, range.to)
                            )
                              return;
                          }
                          setCheckInDate(range.from);
                          setCheckOutDate(range.to ?? undefined);
                          if (range.from && range.to) {
                            setTimeout(() => setCheckOutOpen(false), 100);
                          }
                        } else {
                          setCheckInDate(undefined);
                          setCheckOutDate(undefined);
                        }
                      }}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <PopoverGuest
            guests={guests}
            setGuests={setGuests}
            animals={animals}
            setAnimals={setAnimals}
            open={guestsPopoverOpen}
            onOpenChange={setGuestsPopoverOpen}
            className="p-0!"
          />

          {/* Reserva Button */}
          <Button
            type="button"
            onClick={goToReservation}
            className="w-full md:w-auto md:min-w-60 text-black border-0 bg-white/90 hover:bg-white/50 h-11 sm:h-12 hover:text-black font-light tracking-wider uppercase text-sm cursor-pointer"
            aria-label={t("hero.buttonNext")}
          >
            {t("hero.buttonNext")}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;

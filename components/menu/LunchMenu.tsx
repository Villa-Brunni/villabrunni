"use client";

import { useState } from "react";
import { format, parseISO } from "date-fns";
import { fi } from "date-fns/locale";
import { CalendarDays, Clock } from "lucide-react";
import { Weekday } from "@/types/lunch.type";
import { lunchData } from "@/data/lunchData";



const weekdays: Weekday[] = [
  "maanantai",
  "tiistai",
  "keskiviikko",
  "torstai",
  "perjantai",
];

const shortWeekdayLabel: Record<Weekday, string> = {
  maanantai: "Ma",
  tiistai: "Ti",
  keskiviikko: "Ke",
  torstai: "To",
  perjantai: "Pe",
};

type LunchMenuProps = {
  dates: string[];
  initialDay: Weekday;
};

export default function LunchMenu({
  dates,
  initialDay,
}: LunchMenuProps) {
  const [active, setActive] = useState<Weekday>(initialDay);

  const activeIndex = weekdays.indexOf(active);
  const activeDate = parseISO(dates[activeIndex]);

  const activeData = lunchData.find(
    (day) => day.day === active,
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5f5e9] via-[#faf9f2] to-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#737b42] sm:text-sm">
            VILLA BRUNNI · TRATTORIA
          </p>

          <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#42482b] sm:text-5xl md:text-6xl">
            Lounasbuffet
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#66664f] sm:text-base md:mt-4 md:text-lg">
            Tervetuloa nauttimaan herkullisesta lounaasta
            arkipäivisin.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#55583d]">
            <span className="font-semibold">13,50 €</span>

            <span className="hidden text-[#b3a66b] sm:inline">
              •
            </span>

            <span className="flex items-center gap-2">
              <Clock className="size-4 text-[#737b42]" />
              Ma–Pe 10.30–14.30
            </span>
          </div>

          <p className="mt-2 text-xs text-[#777762] sm:text-sm">
            Eläkeläisen hinta 12,00 €
          </p>
        </div>

        {/* Weekday selector and menu */}
        <div className="grid gap-5 md:grid-cols-4 md:gap-8">

          {/* Weekday selector */}
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#55583d]">
              <CalendarDays className="size-4 text-[#737b42]" />
              Valitse lounaspäivä
            </div>

            <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 md:flex-col md:gap-3 md:overflow-visible md:pb-0">
              {lunchData.map((day) => {
                const index = weekdays.indexOf(day.day);
                const isActive = active === day.day;
                const date = parseISO(dates[index]);

                return (
                  <button
                    key={day.day}
                    type="button"
                    onClick={() => setActive(day.day)}
                    aria-pressed={isActive}
                    className={`min-h-16 shrink-0 snap-start rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#737b42] focus-visible:ring-offset-2 md:w-full ${
                      isActive
                        ? "border-[#626a3a] bg-[#626a3a] text-white shadow-md"
                        : "border-[#e0dfcc] bg-white text-[#42482b] hover:border-[#929768] hover:bg-[#f5f5e9]"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold">
                        <span className="md:hidden">
                          {shortWeekdayLabel[day.day]}
                        </span>

                        <span className="hidden md:inline">
                          {day.label}
                        </span>
                      </span>

                      <span className="text-xs opacity-80">
                        {format(date, "d.M.", { locale: fi })}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected day's menu */}
          <div className="min-w-0 md:col-span-3">
            <div className="rounded-2xl border border-[#e0dfcc] bg-white p-4 shadow-sm sm:p-6 md:p-7">

              {/* Selected day heading */}
              <div className="mb-6 border-b border-[#e8e5d5] pb-5 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#929768]">
                  {format(activeDate, "EEEE", { locale: fi })}
                </p>

                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#42482b] sm:text-3xl">
                  {activeData?.label}
                </h2>

                <p className="mt-2 text-sm text-[#777762]">
                  {format(activeDate, "d. MMMM yyyy", {
                    locale: fi,
                  })}
                </p>
              </div>

              {/* Menu items */}
              <div className="grid gap-3 sm:grid-cols-2">
                {activeData?.items.map((item, index) => (
                  <article
                    key={`${active}-${index}`}
                    className="rounded-xl border border-[#e8e5d5] bg-[#faf9f2] p-4 transition-colors hover:border-[#c7c8a5] hover:bg-[#f5f5e9] sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e9eadb] text-sm font-semibold text-[#626a3a]">
                        {index + 1}
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-serif text-lg font-semibold text-[#42482b] sm:text-xl">
                          {item.name}
                        </h3>

                        {item.description && (
                          <p className="mt-2 text-sm leading-6 text-[#66664f]">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Menu information */}
              <div className="mt-6 space-y-2 border-t border-[#e8e5d5] pt-5 text-center text-xs leading-5 text-[#777762] sm:text-sm md:mt-8 md:pt-6">
                <p>
                  Lounas sisältää salaatin, keiton, lämpimän
                  ruoan, jälkiruoan sekä teen ja kahvin.
                </p>

                <p>
                  M = Maidoton · VL = Vähälaktoosinen ·
                  L = Laktoositon · G = Gluteeniton ·
                  VS = Sis. valkosipuli
                </p>

                <p>
                  Kysythän allergioista henkilökunnalta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
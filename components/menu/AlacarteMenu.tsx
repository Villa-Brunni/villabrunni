
"use client";

import { useEffect, useRef, useState } from "react";
import {
  alacarteMenu,
  burgerExtras,
  burgerInformation,
} from "@/data/menu";

export default function AlacarteMenu() {
  const [activeCategory, setActiveCategory] = useState(
    alacarteMenu[0].id
  );

  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  // Update active category while scrolling
  useEffect(() => {
    const updateActiveCategory = () => {
      const navHeight =
        navRef.current?.getBoundingClientRect().height ?? 0;

      const offset = navHeight + 36;

      let current = alacarteMenu[0].id;

      for (const category of alacarteMenu) {
        const element = document.getElementById(category.id);

        if (
          element &&
          element.getBoundingClientRect().top <= offset
        ) {
          current = category.id;
        }
      }

      setActiveCategory(current);
    };

    updateActiveCategory();

    window.addEventListener("scroll", updateActiveCategory, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveCategory);

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveCategory
      );
      window.removeEventListener(
        "resize",
        updateActiveCategory
      );
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const button = buttonRefs.current[activeCategory];

    if (!nav || !button) return;

    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    if (
      buttonRect.left < navRect.left ||
      buttonRect.right > navRect.right
    ) {
      const target =
        button.offsetLeft -
        nav.clientWidth / 2 +
        button.clientWidth / 2;

      nav.scrollTo({
        left: target,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveCategory(id);

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top =
      window.scrollY +
      element.getBoundingClientRect().top -
      navHeight -
      24;

    window.scrollTo({
      top,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-cream text-olive-dark">
      {/* RESTAURANT HEADER */}
      <header className="relative overflow-hidden border-b border-gold/30 bg-[#faf9f5] px-5 py-14 text-center sm:py-20">
        <div className="pointer-events-none absolute inset-x-6 top-5 h-px bg-gold/40 sm:inset-x-12" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-olive sm:text-xs">
            Villa Brunni Trattoria
          </p>

          <h1 className="font-serif text-5xl font-normal italic tracking-tight text-olive-dark sm:text-7xl">
            Menu
          </h1>

          <div
            aria-hidden="true"
            className="mt-8 flex items-center justify-center gap-2"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </div>
        </div>
      </header>

      {/* STICKY MENU NAVIGATION */}
      <nav
        ref={navRef}
        aria-label="Ruokalistan kategoriat"
        className="sticky top-20 md:top-20 z-50 w-full overflow-x-auto border-b border-gold/30 bg-[#faf9f5]/95 shadow-[0_4px_20px_rgba(48,59,37,0.06)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto flex w-max min-w-full items-center justify-start gap-1 px-4 py-3 lg:justify-center">
          {alacarteMenu.map((category) => {
            const active =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                ref={(element) => {
                  buttonRefs.current[category.id] = element;
                }}
                type="button"
                onClick={() =>
                  scrollToCategory(category.id)
                }
                aria-current={
                  active ? "location" : undefined
                }
                className={`
                  relative shrink-0 rounded-full
                  px-4 py-2.5 text-[11px]
                  font-semibold uppercase
                  tracking-[0.1em]
                  transition-all duration-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-olive
                  sm:px-5 sm:text-xs
                  ${
                    active
                      ? "bg-olive-dark text-white shadow-sm"
                      : "text-olive-dark/65 hover:bg-olive/10 hover:text-olive-dark"
                  }
                `}
              >
                {category.category}
              </button>
            );
          })}
        </div>
      </nav>

      {/* MAIN MENU */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="relative border border-gold/35 bg-[#fffefa] px-5 py-12 shadow-[0_10px_50px_rgba(48,59,37,0.04)] sm:px-12 sm:py-20 lg:px-20">
          {/* Decorative frame */}
          <div className="pointer-events-none absolute inset-2 border border-gold/20 sm:inset-4" />

          <div className="relative">
            {alacarteMenu.map((category, index) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                className="scroll-mt-28"
              >
                {/* CATEGORY HEADING */}
                <div className="mb-10 text-center sm:mb-14">
                  <h2
                    id={`${category.id}-heading`}
                    className="font-serif text-xl font-normal uppercase tracking-[0.25em] text-[#93865e] sm:text-2xl sm:tracking-[0.35em]"
                  >
                    {category.category}
                  </h2>
                </div>

                {/* BOWLIT - SPECIAL LAYOUT */}
                {category.id === "bowlit" ? (
                  <div className="mx-auto max-w-2xl">
                    {/* Bowl prices */}
                    <div className="mx-auto max-w-md space-y-1">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-baseline justify-between gap-5 border-b border-gold/10 px-2 py-2.5 transition-colors hover:bg-olive/5 sm:px-5"
                        >
                          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-olive-dark sm:text-base">
                            {item.name}
                          </h3>

                          <span className="shrink-0 font-semibold tabular-nums tracking-wide text-olive-dark sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Shared description */}
                    {category.sharedDescription && (
                      <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-8 tracking-[0.025em] text-olive-dark/85 sm:text-base sm:leading-9">
                        {category.sharedDescription}
                      </p>
                    )}

                    {/* Sauces */}
                    {category.sauces &&
                      category.sauces.length > 0 && (
                        <div className="mx-auto mt-8 max-w-xl text-center">
                          <p className="text-sm font-semibold leading-8 text-olive-dark sm:text-base">
                            <span className="uppercase tracking-[0.12em]">
                              Kastiketta:
                            </span>{" "}
                            {category.sauces.join(", ")}.
                          </p>
                        </div>
                      )}
                  </div>
                ) : (
                  /* STANDARD MENU LAYOUT */
                  <div className="mx-auto max-w-3xl space-y-8 sm:space-y-11">
                    {category.items.map((item) => (
                      <article
                        key={item.name}
                        className="group rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-olive/[0.035] sm:px-4"
                      >
                        <div className="flex items-start justify-between gap-4 sm:gap-8">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-serif text-lg font-semibold leading-snug tracking-[0.02em] text-olive-dark sm:text-xl">
                              {item.name}
                            </h3>

                            {item.description && (
                              <p className="mt-2 text-sm leading-7 text-olive-dark/75 sm:text-[15px] sm:leading-8">
                                {item.description}
                                {item.dietary && (
                                  <span className="ml-2 whitespace-nowrap font-semibold text-olive">
                                    {item.dietary}
                                  </span>
                                )}
                              </p>
                            )}
                          </div>

                          <span className="shrink-0 pt-1 text-sm font-bold tabular-nums text-olive-dark sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {/* BURGER EXTRAS AND INFORMATION */}
                {category.id === "kana-burgerit" && (
                  <div className="mx-auto mt-14 max-w-2xl">
                    <div className="border-y border-gold/35 py-8">
                      <div className="mx-auto max-w-md space-y-3">
                        {burgerExtras.map((extra) => (
                          <div
                            key={extra.name}
                            className="flex items-baseline justify-between gap-4 text-sm sm:text-base"
                          >
                            <span className="font-medium text-olive-dark">
                              {extra.name}
                            </span>

                            <span className="shrink-0 font-semibold tabular-nums text-olive-dark">
                              {extra.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 space-y-3 text-center">
                      {burgerInformation.map((info) => (
                        <p
                          key={info}
                          className="text-xs leading-6 text-olive-dark/70 sm:text-sm sm:leading-7"
                        >
                          {info}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION DIVIDER */}
                <div
                  aria-hidden="true"
                  className={`flex items-center justify-center gap-2 ${
                    index === alacarteMenu.length - 1
                      ? "mt-16"
                      : "my-20 sm:my-28"
                  }`}
                >
                  <span className="h-2 w-2 rotate-45 bg-[#93865e]" />
                  <span className="h-2 w-2 rotate-45 bg-[#93865e]" />
                  <span className="h-2 w-2 rotate-45 bg-[#93865e]" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

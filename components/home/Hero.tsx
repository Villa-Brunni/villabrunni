import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-olive-dark px-5 py-20 text-center text-white sm:min-h-[620px] sm:px-8">
      <Image
        src="/images/restaurant.jpg"
        alt="Villa Brunni Trattorian ravintolasali"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-olive-dark/75" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-gold sm:text-sm sm:tracking-[0.3em]">
          VILLA BRUNNI · TRATTORIA
        </p>

        <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
          Hyvää ruokaa, hyvää mieltä.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          Tervetuloa nauttimaan herkullisista makuelämyksistä
          ja viihtyisästä tunnelmasta.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/lounas"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-8 py-3 text-sm font-semibold text-olive-dark transition-colors hover:bg-gold/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Tutustu lounasbuffetiin
          </Link>

          <Link
            href="/alacarte"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-olive-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            À la carte -lista
          </Link>
        </div>
      </div>
    </section>
  );
}
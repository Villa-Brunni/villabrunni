import Link from "next/link";

const phone = "+358XXXXXXXXX";

export default function Footer() {
  return (
    <footer className="bg-olive-dark px-5 py-12 text-center text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="font-serif text-3xl font-semibold tracking-wide"
        >
          Villa Brunni
        </Link>

        <p className="mt-3 text-sm text-white/70">
          Trattoria · Hyvää ruokaa, hyvää mieltä.
        </p>

        <nav
          aria-label="Alatunnisteen navigaatio"
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-8"
        >
          <Link href="/" className="hover:text-gold">
            Koti
          </Link>
          <Link href="/lounas" className="hover:text-gold">
            Lounasbuffet
          </Link>
          <Link href="/alacarte" className="hover:text-gold">
            À la carte
          </Link>
          <Link href="/#yhteystiedot" className="hover:text-gold">
            Yhteystiedot
          </Link>
          <a href={`tel:${phone}`} className="hover:text-gold">
            Soita meille
          </a>
        </nav>

        <p className="mt-10 text-xs text-white/50">
          © 2026 Villa Brunni
        </p>
      </div>
    </footer>
  );
}
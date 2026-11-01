"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const phone = " +358 442442265";

const links = [
  { label: "Koti", href: "/" },
  { label: "Lounasbuffet", href: "/lounas" },
  { label: "À la carte", href: "/alacarte" },
  { label: "Yhteystiedot", href: "/#yhteystiedot" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-olive-dark text-white">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Villa Brunni, etusivu"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/Images/logo.png"
            alt="Villa Brunni Trattoria"
            width={210}
            height={70}
            priority
            className="h-auto w-36 sm:w-48"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${phone}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gold px-5 py-2 text-sm font-semibold text-olive-dark transition-colors hover:bg-gold/80"
          >
            <Phone className="size-4" />
            Soita meille
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
        >
          {menuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-olive-dark px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-base font-medium transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${phone}`}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-olive-dark"
          >
            <Phone className="size-4" />
            Soita meille
          </a>
        </nav>
      )}
    </header>
  );
}
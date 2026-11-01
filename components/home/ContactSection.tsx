import { Clock, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const restaurant = {
  address: "Isoseppälä 14, 01800 Klaukkala",
  phone: "+358 442442265",
  mapUrl: "https://www.google.com/maps?q=Villa+Brunni&output=embed",
};

const openingHours = [
  { day: "Maanantai–Torstai", hours: "10:30-21:00" },
  { day: "Perjantai", hours: "10:30-4:00" },
  { day: "Lauantai", hours: "11:00-4:00" },
  { day: "sunnuntai", hours: "11:00-21:00" },
];

export default function ContactSection() {
  return (
    <section
      id="yhteystiedot"
      className="scroll-mt-24 bg-cream px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-xl shadow-md">
          <iframe
            title="Villa Brunni sijainti kartalla"
            src={restaurant.mapUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 sm:h-[400px]"
          />
        </div>

        <div className="space-y-7">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-olive">
              TERVETULOA
            </p>

            <h2 className="font-serif text-3xl text-olive-dark sm:text-4xl">
              Löydä meidät
            </h2>

            <p className="mt-4 leading-7 text-olive-dark/75">
              Tule nauttimaan herkullisesta ruoasta ja viihtyisästä tunnelmasta
              Villa Brunniin.
            </p>
          </div>

          <Separator className="bg-olive/20" />

          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-olive" />

            <div>
              <h3 className="font-semibold text-olive-dark">Osoite</h3>
              <p className="mt-1 text-olive-dark/75">{restaurant.address}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-olive" />

            <div>
              <h3 className="font-semibold text-olive-dark">Puhelin</h3>
              <a
                href={`tel:${restaurant.phone}`}
                className="mt-1 inline-block text-olive-dark/75 underline-offset-4 hover:underline"
              >
                {restaurant.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-olive" />

            <div className="w-full">
              <h3 className="font-semibold text-olive-dark">Aukioloajat</h3>

              <div className="mt-2 space-y-2">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-wrap justify-between gap-4 text-sm text-olive-dark/75"
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
                <div className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-4">
                  <h4 className="font-semibold text-olive-dark">
                    Myöhäisillan menu
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-olive-dark/75">
                    Perjantaisin ja lauantaisin klo 21:00 alkaen tarjoilemme
                    erillistä myöhäisillan menua.
                  </p>

                  <p className="mt-2 text-sm font-medium text-olive-dark">
                    Keittiö suljetaan 30 minuuttia ennen ravintolan
                    sulkemisaikaa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

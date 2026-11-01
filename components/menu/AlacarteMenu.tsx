import { Card, CardContent } from "@/components/ui/card";
import { alacarteMenu } from "@/data/menu";

export default function AlacarteMenu() {
  return (
    <section className="bg-cream px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-olive sm:text-sm">
            JOKA PÄIVÄ
          </p>

          <h1 className="font-serif text-4xl text-olive-dark sm:text-5xl">
            À la carte
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-olive-dark/75">
            Tutustu ruokalistaamme ja löydä oma suosikkisi.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {alacarteMenu.map((category) => (
            <section key={category.category}>
              <h2 className="mb-5 border-b-2 border-gold pb-3 font-serif text-2xl text-olive-dark sm:text-3xl">
                {category.category}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="border-olive/15 bg-white shadow-sm"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif text-xl text-olive-dark">
                          {item.name}
                        </h3>

                        <span className="shrink-0 font-semibold text-olive">
                          {item.price}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-olive-dark/70">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
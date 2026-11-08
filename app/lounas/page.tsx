import LunchMenu from "@/components/menu/LunchMenu";

export default function LunchPage() {
  return (
    <main>
      <LunchMenu dates={[
          "2026-11-09",
          "2026-11-10",
          "2026-11-11",
          "2026-11-12",
          "2026-11-13",
        ]} initialDay={"maanantai"} />
    </main>
  );
}
import LunchMenu from "@/components/menu/LunchMenu";

export default function LunchPage() {
  return (
    <main>
      <LunchMenu dates={[
          "2026-11-23",
          "2026-11-24",
          "2026-11-25",
          "2026-11-26",
          "2026-11-27",
        ]} initialDay={"maanantai"} />
    </main>
  );
}
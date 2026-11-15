import LunchMenu from "@/components/menu/LunchMenu";

export default function LunchPage() {
  return (
    <main>
      <LunchMenu dates={[
          "2026-11-16",
          "2026-11-17",
          "2026-11-18",
          "2026-11-19",
          "2026-11-20",
        ]} initialDay={"maanantai"} />
    </main>
  );
}